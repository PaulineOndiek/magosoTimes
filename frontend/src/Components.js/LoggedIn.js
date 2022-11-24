const NavCenter = styled.div``

const Nav = () => {

  const { isLogged } = useContext(LoginContext);

  const [isLogin, setLogin] = isLogged;
  if (isLogin.is_Login) {
    isLogin.username = localStorage.getItem("username");
    isLogin.email = localStorage.getItem("email");
  }

  const Logout = () => {
    localStorage.clear();
    setLogin({
      is_Login: false,
      username: "",
      email: "",
    });
  };
  
  return (
    <NavContainer>
      <InnerNav className="Container">
        <NavLeft>
          <Link to="/">BLOG</Link>
        </NavLeft>
        <NavCenter>
          <NavUl>
            <NavList>
              <InnerContain>
                <SearchContain>
                  <SearchIcon />
                </SearchContain>
                <InputContain>
                  <Input type="Text" placeholder="Search" />
                </InputContain>
              </InnerContain>
            </NavList>
          </NavUl>
        </NavCenter>
        <NavRight>
          <NavUl>
            <NavList>
              <Link to="/">Blogs</Link>
            </NavList>
            {isLogin.is_Login ? (
              <div>
                <NavList>
                  <Link to="/addblog">Add blog</Link>
                </NavList>
              </div>
            ) : (
              <div>
                <NavList>
                  <Link to="/login">Add blog</Link>
                </NavList>
              </div>
            )}
            {isLogin.is_Login ? (
              <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  {" "}
                  <NavList>
                    <Link to="/profile">Profile</Link>
                  </NavList>
                </div>
                <div>
                  <NavList>
                    <Link to="/logout">Logout</Link>
                  </NavList>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  <NavList>
                    {" "}
                    <Link to="/register">Register</Link>
                  </NavList>
                </div>
                <div>
                  <NavList>
                    <Link to="/login">LogIn</Link>
                  </NavList>
                </div>
              </div>
            )}
          </NavUl>
        </NavRight>
      </InnerNav>
    </NavContainer>
  );
};
export default Nav;