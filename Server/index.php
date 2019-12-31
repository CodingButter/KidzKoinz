<?php
        
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT');
        header('Access-Control-Allow-Headers: *');
        header('Content-Type: application/json');
        require 'config/config.php';


        $API = [
                "GET_AVATAR"=>function($data){
                        GLOBAL $con;
                        $id = $data['id'];
                        $qry = $con->prepare("SELECT file_name FROM avatars WHERE id=:id");
                        $qry->execute(array(":id"=>$id));
                        $url = $qry->fetch(PDO::FETCH_ASSOC);
                        return SERVER."avatars/".$url['file_name'];
                },
                "GET_HOUSEHOLD_AVATARS"=>function($data){
                        GLOBAL $con;
                        GLOBAL $API;
                        $users = $API["GET_HOUSEHOLD_USERS"]($data);
                        for($i=0;$i<count($users["children"]);$i++){
                                $users["children"][$i]['avatar'] = $API["GET_AVATAR"](["id"=>$users["children"][$i]["avatar_id"]]);
                                unset($users["children"][$i]["password"]);
                        }
                        for($i=0;$i<count($users["parents"]);$i++){
                                $users["parents"][$i]['avatar'] = $API["GET_AVATAR"](["id"=>$users["parents"][$i]["avatar_id"]]);
                                unset($users["parents"][$i]["password"]);
                        }
                        return $users;
                },
                "GET_HOUSEHOLD_USERS"=>function($data){
                        GLOBAL $API;
                        $parents = $API["GET_PARENTS_BY_HOUSEHOLD"]($data);
                        $children = [];
                        foreach($parents as $parent){
                                GLOBAL $API;
                                $children_resp = $API["GET_CHILDREN_BY_PARENT"](["id"=>$parent['id']]);
                                foreach($children_resp as $child){
                                        array_push($children,$child);
                                }
                        }
                        $children = array_unique($children, SORT_REGULAR);
                        return ["parents"=>$parents,"children"=>$children];
                },
                "GET_PARENTS_BY_HOUSEHOLD"=>function($data){
                        GLOBAL $con;
                        $id = $data['id'];
                        $qry = $con->prepare("SELECT * FROM parents WHERE id = :id");
                        $qry->execute(array(":id"=>$id));
                        $parents = $qry->fetchAll(PDO::FETCH_ASSOC);
                        return $parents;
                },
                "GET_CHILDREN_BY_PARENT"=>function($data){
                        GLOBAL $con;
                        $parent_id = $data['id'];
                        $sql = "select * from children inner join child_parent
                                on child_parent.child_id=children.id
                                where child_parent.parent_id=:parent_id";
                        $qry = $con->prepare($sql);
                        $qry->execute(array(":parent_id"=>$parent_id));
                        $children = $qry->fetchALL(PDO::FETCH_ASSOC);
                        return $children;
                },        
                "REGISTER_NEW_PARENT"=>function($data){
                        GLOBAL $con;
                        $sql = "SELECT COUNT(id) as total FROM parents WHERE email = :email";
                        $qry = $con->prepare($sql);
                        $qry->execute(array(":email"=>$data["email"]));
                        $num_rows = $qry->fetch(PDO::FETCH_ASSOC);
                        if($num_rows["total"]>0){
                                echo "SOME ERROR CATCHING STUFF";
                        }else{
                                $values = array(
                                        ":first_name"=>$data["first_name"],
                                        ":last_name"=>$data["last_name"],
                                        ":email"=>$data["email"],
                                        ":household_id"=>$data["household_id"],
                                        ":avatar_id"=>$data["avatar_id"],
                                        ":uuid"=>$data["uuid"]
                                );
                                $sql = "INSERT INTO parents (first_name,last_name,email,password,household_id,avatar_id,uuid);
                                VALUES (:first_name,:last_name,:email,:password,:household_id,:avatar_id,:uuid)";
                                $qry = $con->prepare($sql);
                                $qry->execute()
                                
                        }
                }

        ];

       echo json_encode($API[$_REQUEST['request_type']]($_REQUEST),1);
?>