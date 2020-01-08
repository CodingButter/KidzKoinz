import Header from "./Header";
describe("shallow", () => {
  it("Sould return the logo an nav", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
