import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  width: 200px;
`;

const PageTitle = styled.div`
  margin: 0px;
  box-sizing: border-box;
  padding: 5px 0px 35px 1px;
  height: 75px;
  font-weight: 500;
  font-size: 28px;
  line-height: 35px;
  color: rgb(51, 51, 51);
  letter-spacing: -1px;
`;

const NavMenu = styled.ul`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  list-style-type: none;
  border: 1px solid rgb(242, 242, 242);
`;

const NavMenuItem = styled.li`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`;

const NavLink = styled.a`
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  background-color: transparent;
  border-bottom: 1px solid rgb(242, 242, 242);
  padding: 15px 13px 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 19px;
  letter-spacing: -0.3px;
  font-size: 14px;
  color: rgb(102, 102, 102);

  &.active {
    background-color: rgb(250, 250, 250);
    color: rgb(95, 0, 128);
    font-weight: 500;
  }
`;

const Icon = styled.svg`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  overflow: hidden;
`;

const MyKurly = () => {
  return (
    <Navbar>
      <PageTitle>마이컬리</PageTitle>
      <NavMenu>
        <NavMenuItem>
          <NavLink href="./order">
            주문내역
            <Icon
              height="19"
              width="19"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="gfk9q0rhta"
                  d="M1.657 1.657L9.657 1.657 9.657 9.657"
                />
              </defs>
              <g fill="none" fillRule="evenodd">
                <g>
                  <g>
                    <g>
                      <use
                        stroke="#999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        transform="rotate(45 5.657 5.657)"
                        xlinkHref="#gfk9q0rhta"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </Icon>
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="./address">
            배송지 관리
            <Icon
              height="19"
              width="19"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="gfk9q0rhta"
                  d="M1.657 1.657L9.657 1.657 9.657 9.657"
                />
              </defs>
              <g fill="none" fillRule="evenodd">
                <g>
                  <g>
                    <g>
                      <use
                        stroke="#999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        transform="rotate(45 5.657 5.657)"
                        xlinkHref="#gfk9q0rhta"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </Icon>
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink>
            상품후기
            <Icon
              height="19"
              width="19"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="gfk9q0rhta"
                  d="M1.657 1.657L9.657 1.657 9.657 9.657"
                />
              </defs>
              <g fill="none" fillRule="evenodd">
                <g>
                  <g>
                    <g>
                      <use
                        stroke="#999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        transform="rotate(45 5.657 5.657)"
                        xlinkHref="#gfk9q0rhta"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </Icon>
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink className="active">
            개인 정보 수정
            <Icon
              height="19"
              width="19"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="gfk9q0rhta"
                  d="M1.657 1.657L9.657 1.657 9.657 9.657"
                />
              </defs>
              <g fill="none" fillRule="evenodd">
                <g>
                  <g>
                    <g>
                      <use
                        stroke="#5f0080"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        transform="rotate(45 5.657 5.657)"
                        xlinkHref="#gfk9q0rhta"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </Icon>
          </NavLink>
        </NavMenuItem>
      </NavMenu>
    </Navbar>
  );
};

export default MyKurly;