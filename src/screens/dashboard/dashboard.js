import "../../App.css";
import React from "react";

export default function Dashboard() {
  return (
    <section className="container">
      <nav className="nav_left"></nav>
      <nav className="nav_container">
        <div></div>
        <nav className="nav_header">
          <div className="flag_container">
            <img
              src={
                "https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg"
              }
              alt="Eglish"
              className="flag"
            />
            <span className="span_one">English</span>
          </div>
          <p className="admin">
            Jhon Doe <span className="span">admin</span>
          </p>
          {/* <img src={img} alt="header" /> */}
        </nav>
        <div></div>
        <nav className="nav_centr">
          <div className="inputbox">
            <div className="input_header">
              <h5>Filters</h5>
            </div>
            <div className="input_up">
              <nav className="nav_input">
                <div className="div_one">
                  <label>Role</label>
                  <input
                    aria-autocomplete="list"
                    aria-labelledby="vs4__combobox"
                    aria-controls="vs4__listbox"
                    type="search"
                    autocomplete="off"
                  ></input>
                </div>
                <div className="div_one">
                  <label>Status</label>
                  <input
                    aria-autocomplete="list"
                    aria-labelledby="vs6__combobox"
                    aria-controls="vs6__listbox"
                    type="search"
                    autocomplete="off"
                  ></input>
                </div>
              </nav>
            </div>
          </div>
        </nav>
        <div></div>
        <nav className="tablebox">
          <div className="table_header">
            <input
              data-v-32017d0f=""
              type="text"
              placeholder="Search..."
              class="input"
              id="__BVID__788"
            />
            <button className="button">Add User</button>
          </div>
          <table className="table">
            <tr className="color_one">
              <th>user</th>
              <th>email</th>
              <th>Role</th>
              <th>Status</th>
              <th>actions</th>
            </tr>
            <tr className="borderbottom">
              <td>
                <img
                  src={
                    "https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg"
                  }
                  alt="#"
                />
                <div className="user-info">
                  <p className="blue">Beverlie Krabbe</p>
                  <p className="color">bkrabbe1d@</p>
                </div>
              </td>
              <td>bkrabbe1d@home.pl</td>
              <td>
                <span className="center-td">
                  <svg
                    data-v-32017d0f=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon"
                  >
                    <path
                      data-v-32017d0f=""
                      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                    ></path>
                  </svg>
                  <span
                    data-v-32017d0f=""
                    class="align-text-top text-capitalize"
                  >
                    editor
                  </span>
                </span>
              </td>
              <td className="circle">
                <span class="span_color">&nbsp; active &nbsp;</span>
              </td>
              <td class="circle">
                <svg
                  data-v-32017d0f=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle data-v-32017d0f="" cx="12" cy="12" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="5" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>
            <tr className="borderbottom">
              <td>
                <img
                  src={
                    "https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg"
                  }
                  alt="#"
                />
                <div className="user-info">
                  <p className="blue">Beverlie Krabbe</p>
                  <p className="color">bkrabbe1d@</p>
                </div>
              </td>
              <td>bkrabbe1d@home.pl</td>
              <td>
                <span className="center-td">
                  <svg
                    data-v-32017d0f=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon"
                  >
                    <path
                      data-v-32017d0f=""
                      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                    ></path>
                  </svg>
                  <span
                    data-v-32017d0f=""
                    class="align-text-top text-capitalize"
                  >
                    editor
                  </span>
                </span>
              </td>
              <td className="circle">
                <span class="span_color">&nbsp; active &nbsp;</span>
              </td>
              <td class="circle">
                <svg
                  data-v-32017d0f=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle data-v-32017d0f="" cx="12" cy="12" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="5" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>
            <tr className="borderbottom">
              <td>
                <img
                  src={
                    "https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg"
                  }
                  alt="#"
                />
                <div className="user-info">
                  <p className="blue">Beverlie Krabbe</p>
                  <p className="color">bkrabbe1d@</p>
                </div>
              </td>
              <td>bkrabbe1d@home.pl</td>
              <td>
                <span className="center-td">
                  <svg
                    data-v-32017d0f=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon"
                  >
                    <path
                      data-v-32017d0f=""
                      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                    ></path>
                  </svg>
                  <span
                    data-v-32017d0f=""
                    class="align-text-top text-capitalize"
                  >
                    editor
                  </span>
                </span>
              </td>
              <td className="circle">
                <span class="span_color">&nbsp; active &nbsp;</span>
              </td>
              <td class="circle">
                <svg
                  data-v-32017d0f=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle data-v-32017d0f="" cx="12" cy="12" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="5" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>
            <tr className="borderbottom">
              <td>
                <img
                  src={
                    "https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg"
                  }
                  alt="#"
                />
                <div className="user-info">
                  <p className="blue">Beverlie Krabbe</p>
                  <p className="color">bkrabbe1d@</p>
                </div>
              </td>
              <td>bkrabbe1d@home.pl</td>
              <td>
                <span className="center-td">
                  <svg
                    data-v-32017d0f=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon"
                  >
                    <path
                      data-v-32017d0f=""
                      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                    ></path>
                  </svg>
                  <span
                    data-v-32017d0f=""
                    class="align-text-top text-capitalize"
                  >
                    editor
                  </span>
                </span>
              </td>
              <td className="circle">
                <span class="span_color">&nbsp; active &nbsp;</span>
              </td>
              <td class="circle">
                <svg
                  data-v-32017d0f=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle data-v-32017d0f="" cx="12" cy="12" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="5" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>
            <tr className="borderbottom">
              <td>
                <img
                  src={
                    "https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg"
                  }
                  alt="#"
                />
                <div className="user-info">
                  <p className="blue">Beverlie Krabbe</p>
                  <p className="color">bkrabbe1d@</p>
                </div>
              </td>
              <td>bkrabbe1d@home.pl</td>
              <td>
                <span className="center-td">
                  <svg
                    data-v-32017d0f=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon"
                  >
                    <path
                      data-v-32017d0f=""
                      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                    ></path>
                  </svg>
                  <span
                    data-v-32017d0f=""
                    class="align-text-top text-capitalize"
                  >
                    editor
                  </span>
                </span>
              </td>
              <td className="circle">
                <span class="span_color">&nbsp; active &nbsp;</span>
              </td>
              <td class="circle">
                <svg
                  data-v-32017d0f=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle data-v-32017d0f="" cx="12" cy="12" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="5" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>
            <tr className="borderbottom">
              <td>
                <img
                  src={
                    "https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg"
                  }
                  alt="#"
                />
                <div className="user-info">
                  <p className="blue">Beverlie Krabbe</p>
                  <p className="color">bkrabbe1d@</p>
                </div>
              </td>
              <td>bkrabbe1d@home.pl</td>
              <td>
                <span className="center-td">
                  <svg
                    data-v-32017d0f=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon"
                  >
                    <path
                      data-v-32017d0f=""
                      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                    ></path>
                  </svg>
                  <span
                    data-v-32017d0f=""
                    class="align-text-top text-capitalize"
                  >
                    editor
                  </span>
                </span>
              </td>
              <td className="circle">
                <span class="span_color">&nbsp; active &nbsp;</span>
              </td>
              <td class="circle">
                <svg
                  data-v-32017d0f=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle data-v-32017d0f="" cx="12" cy="12" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="5" r="1"></circle>
                  <circle data-v-32017d0f="" cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>
          </table>
        </nav>
      </nav>
    </section>
  );
}
