import Header from "./Header";

describe("Header component", () => {
  it("should match the actual snapshot", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
