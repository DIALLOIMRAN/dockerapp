import React, { Component } from "react";
import Logo from '../assets/media/brand/logo.svg';
import Brand from '../assets/media/images/feature.svg';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="Dashboard">
      <div className="container-fluid">
        <div className="row">

            {/*  MOBILE HEADER */}
          <div className="Mobile-Header">

              {/*  LEFT SIDE  */}
            <div className="LeftSide">
              <div className="ToggleMenu">
                <button type="button" className="ToggleMenu-BTN"><i className="uil uil-subject"></i></button>
              </div>
            </div>

              {/*  CENTER SIDE  */}
            <div className="CenterSide">
              <div className="DigiReporing-BrandResponsive">
                <img src={Brand} alt=""/>
              </div>
            </div>

              {/*  RIGHT SIDE  */}
            <div className="RightSide">
              <div className="ToggleUser">
                <button type="button" className="ToggleUser-BTN"><div className="UserBox-Thumb"></div></button>
              </div>
              <div className="ToggleAlerts">
                <button type="button" className="ToggleAlerts-BTN"><i className="uil uil-bell"></i></button>
              </div>
            </div>

            <div className="Search-Box">
              {/* <form className="Search-Form" method="post">
                <input type="search" name="" value="" placeholder="Search..."/>
                <button type="submit" name="button"><i className="uil uil-search"></i></button>
              </form> */}
            </div>
          </div>


            {/*  LEFT SIDE  */}
          <div className="Menu-Side fixed-left">
            <div className="DigiReporing-LOGO">
              <img src={Logo} alt=""/>
            </div>

            <div className="Projects-List">
              <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Projects
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#"><div className="Project-Thumb"></div><span className="Project-Name">Projet 1</span></a>
                  <a className="dropdown-item" href="#"><div className="Project-Thumb"></div><span className="Project-Name">Projet 2</span></a>
                  <a className="dropdown-item" href="#"><div className="Project-Thumb"></div><span className="Project-Name">Projet 3</span></a>
                </div>
              </div>
            </div>

            <div className="DigiReporting-Menu">
              <div className="DigiReporting-Menu-Item"><a className="Menu-Link" href="dashboard.html"><i className="uil uil-dashboard"></i> <span>Dashboard</span></a></div>
              <div className="DigiReporting-Menu-Item"><a className="Menu-Link" href="startups.html"><i className="uil uil-rocket"></i> <span>Startups</span></a></div>
              <div className="DigiReporting-Menu-Item"><a className="Menu-Link" href="consultants.html"><i className="uil uil-user-md"></i> <span>Consultants</span></a></div>
              <div className="DigiReporting-Menu-Item"><a className="Menu-Link" href="managers.html"><i className="uil uil-briefcase-alt"></i> <span>Pilotes / Bailleurs</span></a></div>
              <div className="DigiReporting-Menu-Item"><a className="Menu-Link" href="settings.html"><i className="uil uil-edit-alt"></i> <span>Édition</span></a></div>
            </div>
          </div>
            {/*  END LEFT SIDE  */}

            {/*  CONTENT SIDE  */}
          <div className="Content-Side">
              {/*  CONTENT SIDE  */}
            <div className="HeaderTop">
              <div className="HeaderLeft-Side">
                <div className="Search-Box">
                  {/* <form className="Search-Form" method="post">
                    <input type="search" name="" value="" placeholder="Search..."/>
                    <button type="submit" name="button"><i className="uil uil-search"></i></button>
                  </form> */}
                </div>
              </div>
              <div className="HeaderRight-Side">
                <div className="UserBox" data-toggle="tooltip" data-placement="bottom" title="Profile">
                  <a href="me.html">
                    <div className="UserBox-Infos">
                      <label>Youness EL BEZZAZI</label>
                      <span>Bailleur / Pilote</span>
                    </div>
                    <div className="UserBox-Thumb"></div>
                  </a>
                </div>
                <div className="AlertBox">
                  <button className="AlertBox-BTN" type="button" name="button" data-toggle="tooltip" data-placement="bottom" title="Notifications"><i className="uil uil-bell"></i></button>
                  <div className="NotificationsContainer">
                    <div className="NotificationsContent-BOX">
                      <h4>Notifications</h4>
                      <div className="NotificationsItems">
                        <div className="NotificationItem">
                          <div className="NotificationItem-Thumb"></div>
                          <div className="NotificationItem-Content">
                            <span className="NotificationItem-Text">Notifcation text goes here...</span>
                            <span className="NotificationItem-Time">5 min ago</span>
                          </div>
                        </div>
                        <div className="NotificationItem">
                          <div className="NotificationItem-Thumb"></div>
                          <div className="NotificationItem-Content">
                            <span className="NotificationItem-Text">Notifcation text goes here...</span>
                            <span className="NotificationItem-Time">5 min ago</span>
                          </div>
                        </div>
                        <div className="NotificationItem">
                          <div className="NotificationItem-Thumb"></div>
                          <div className="NotificationItem-Content">
                            <span className="NotificationItem-Text">Notifcation text goes here...</span>
                            <span className="NotificationItem-Time">5 min ago</span>
                          </div>
                        </div>
                        <div className="NotificationItem">
                          <div className="NotificationItem-Thumb"></div>
                          <div className="NotificationItem-Content">
                            <span className="NotificationItem-Text">Notifcation text goes here...</span>
                            <span className="NotificationItem-Time">5 min ago</span>
                          </div>
                        </div>
                        <div className="NotificationItem">
                          <div className="NotificationItem-Thumb"></div>
                          <div className="NotificationItem-Content">
                            <span className="NotificationItem-Text">Notifcation text goes here...</span>
                            <span className="NotificationItem-Time">5 min ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="DetailsPage-Container">
                <div className="DetailsPage-Cover custom">
                  <div className="StartUPInfos-Header">
                    <div id="imageProfile" className="StartUPInfos-Thumb"><span>FC</span></div>
                    <div className="StartUPInfos-Name">Fund Corp</div>
                    <div className="StartUPInfos-Identiant">@IdentifiantUnique</div>
                  </div>
                </div>
                <div className="DetailsPage-Content">
                  <div className="DetailsPage-Desc">
                    <h3>Heading Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>

                  <div className="MessionsBOX">
                    <div className="MessionsBOX-Header">
                      <h4>Missions</h4>
                      <div className="FilterForm">
                        <div className="FilterRow">

                            {/*  START INPUT ROW  */}
                          <div className="Input-Row Input-Select">
                            <select className="SelectFilter LightedColor" name="">
                              <option selected value="0">Chiffre d’affaires</option>
                              <option value="1" selected>Mars 2019</option>
                              <option value="2">Avril 2019</option>
                              <option value="3">Mai 2019</option>
                            </select>
                          </div>
                            {/*  END INPUT ROW  */}
                        </div>
                      </div>
                    </div>
                    <div className="MissionsContainer">

                      <div className="MissionBOX">
                        <span className="MissionBOX-Date">01.01.20</span>
                        <h5 className="MissionBOX-Title">Réunion de cadrage</h5>
                        <span className="MissionBOX-City">Dubai</span>
                      </div>
                      <div className="MissionBOX">
                        <span className="MissionBOX-Date">01.01.20</span>
                        <h5 className="MissionBOX-Title">Contrôle des projets</h5>
                        <span className="MissionBOX-City">Rabat</span>
                      </div>
                      <div className="MissionBOX">
                        <span className="MissionBOX-Date">01.01.20</span>
                        <h5 className="MissionBOX-Title">Réunion de cadrage</h5>
                        <span className="MissionBOX-City">Dubai</span>
                      </div>
                      <div className="MissionBOX">
                        <span className="MissionBOX-Date">01.01.20</span>
                        <h5 className="MissionBOX-Title">Visite de contrôle</h5>
                        <span className="MissionBOX-City">Dubai</span>
                      </div>
                      <div className="MissionBOX">
                        <span className="MissionBOX-Date">01.01.20</span>
                        <h5 className="MissionBOX-Title">Visite de contrôle</h5>
                        <span className="MissionBOX-City">Rabat</span>
                      </div>
                      <div className="MissionBOX">
                        <span className="MissionBOX-Date">01.01.20</span>
                        <h5 className="MissionBOX-Title">Visite de contrôle</h5>
                        <span className="MissionBOX-City">Dubai</span>
                      </div>


                    </div>
                  </div>

                  <div className="StartUP-BOXES">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="ReportBOX Participations">
                          <div className="ReportBOX-Header">
                            <h4 className="ReportBOX-HeaderTitle"><i className="uil uil-presentation"></i> Budget</h4>
                            <button type="button" name="button" className="ReportView">Voir les rapports</button>
                          </div>
                          <div className="ReportBOX-Body">
                            <div id="ReportPie" style={{width:"100%"}}>
                              <canvas id="chart-area"></canvas>
                            </div>
                            <div className="BudgetStatus">
                              <label className="BudgetStatus-Expend"><span className="BudgetStatus-ExpendValue">$6 500</span></label>
                              <label className="BudgetStatus-Rest"><span className="BudgetStatus-ExpendRest">$3 000</span></label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="TeamBOX">
                          <div className="TeamBOX-Header">
                            <h4 className="TeamBOX-HeaderTitle"><i className="uil uil-users-alt"></i> Team</h4>
                          </div>
                          <ul className="TeamBOX-List">
                            <li className="TeamBOX-ListItem">
                              <div className="TeamBOX-MemberAvatar"></div>
                              <div className="TeamBOX-MemberDetails">
                                <div className="MemberDetails-Name">Youness ELBEZZAZI</div>
                                <span className="MemberDetails-Email">youness@digireporting.com</span>
                                <span className="MemberDetails-Function">Designer</span>
                              </div>
                            </li>
                            <li className="TeamBOX-ListItem">
                              <div className="TeamBOX-MemberAvatar"></div>
                              <div className="TeamBOX-MemberDetails">
                                <div className="MemberDetails-Name">Youness ELBEZZAZI</div>
                                <span className="MemberDetails-Email">youness@digireporting.com</span>
                                <span className="MemberDetails-Function">Designer</span>
                              </div>
                            </li>
                            <li className="TeamBOX-ListItem">
                              <div className="TeamBOX-MemberAvatar"></div>
                              <div className="TeamBOX-MemberDetails">
                                <div className="MemberDetails-Name">Youness ELBEZZAZI</div>
                                <span className="MemberDetails-Email">youness@digireporting.com</span>
                                <span className="MemberDetails-Function">Designer</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="DetailsPage-Sidebar">
                <div className="StartUPInfos-Header">
                  <div id="imageProfile" className="StartUPInfos-Thumb"><span>YC</span></div>
                  <div className="StartUPInfos-Name">Yang consulting</div>
                  <div className="StartUPInfos-Identiant">@IdentifiantUnique</div>
                </div>
                <div className="StartUPInfos-Body">
                  <ul className="StartUPInfos-List">
                    <li className="StartUPInfos-Item">
                      <div className="StartUPInfos-ItemIcon"><i className="uil uil-crosshair-alt"></i></div>
                      <div className="StartUPInfos-ItemContent">
                        <label className="StartUPInfos-ItemLabel">Secteur d’activité</label>
                        <span className="StartUPInfos-ItemValue">Bailleur de fonds</span>
                      </div>
                    </li>
                    <li className="StartUPInfos-Item">
                      <div className="StartUPInfos-ItemIcon"><i className="uil uil-map-marker"></i></div>
                      <div className="StartUPInfos-ItemContent">
                        <label className="StartUPInfos-ItemLabel">Lieu de création</label>
                        <span className="StartUPInfos-ItemValue">Casablanca</span>
                      </div>
                    </li>
                    <li className="StartUPInfos-Item">
                      <div className="StartUPInfos-ItemIcon"><i className="uil uil-calendar-alt"></i></div>
                      <div className="StartUPInfos-ItemContent">
                        <label className="StartUPInfos-ItemLabel">Date de création</label>
                        <span className="StartUPInfos-ItemValue">2020</span>
                      </div>
                    </li>
                  </ul>

                  <ul className="StartUPInfos-Contact">
                    <h4>Contacts</h4>
                    <li className="StartUPInfos-ContactItem"><i className="uil uil-globe"></i> <a href="https://fundcorp.ma">https://fundcorp.ma</a></li>
                    <li className="StartUPInfos-ContactItem"><i className="uil uil-envelope"></i> <a href="contact@fundcorp.ma">contact@fundcorp.ma</a></li>
                    <li className="StartUPInfos-ContactItem GrayLink"><i className="uil uil-phone-alt"></i> <a href="tel:06 79 76 23 98">06 79 76 23 98</a></li>
                    <li className="StartUPInfos-ContactItem GrayLink"><i className="uil uil-facebook-f"></i> <a href="#!">facebook.com/FundCorp</a></li>
                    <li className="StartUPInfos-ContactItem GrayLink"><i className="uil uil-twitter"></i> <a href="#!">twitter.com/FundCorp</a></li>
                  </ul>
                </div>

                <div className="StartUPInfos-Footer">
                  <label>Infos légales</label><span>RC: 20000 - IF 900000</span>
                </div>
              </div>
            </div>

          </div>
            {/*  END CONTENT SIDE  */}

        </div>
      </div>
    </div>
    );
  }
}