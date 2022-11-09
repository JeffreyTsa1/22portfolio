import React from 'react'



const ProjectMenu = () => {
  return (
    <div>

<div class="project_preview_container">
            <div class="main_container">
                <a href="javascript:delay('dbdash.html')">
                    <div class="card_container" id="dva">
                        <h2>Business Dashboard</h2>
                        <div class="bottom_wrapper">
                            <div class="left_pane">
                                <h3>Background:</h3>
                                <p>During my internship at Dow, one of the projects I worked on was a data analytics dashboard. This dashboard provided information to Dow executives in a quick, concise, and aesthetically pleasing manner. I implemented a section for Current Events with JavaScript, jQuery, and CSS. 
                                    <i class="home_hide_content">My implemented section displays a list of articles. Once an article is clicked, a box will expand to fill the screen, displaying the full article.
 </i> </p>
                            </div>
                            <div class="middle_pane">
                                {/* <img src="img/dbdashpreview.png"> */}
                            </div>
                            <div class="right_pane">
                                <div class="split">
                                    <h3>Timeline:</h3>
                                    <p>June - August 2019 (2 Months)</p>
                                </div>
                                <div class="split">
                                    <h3>Tools:</h3>
                                    <p>Figma, Principle, AngularJS </p>
                                </div>
                                <div class="split">
                                    <h3>Affiliation:</h3>
                                    <p> Front-End Development</p>
                                </div>
                            </div>
                        </div>
                        <h3 id="enter_tips"> Click here to enter </h3>
                    </div>
                </a>
            </div>
        </div>
        <div class="project_preview_container">
            <div class="main_container">
                <a href="javascript:delay('hourglass.html')">
                    <div class="card_container" id="hg">
                        <h2>Hourglass</h2>
                        <div class="bottom_wrapper">
                            <div class="left_pane">
                                <h3>Background:</h3>
                                <p>Hourglass is a web application that helps users identify and eliminate poor work habits. It is the result of a group project for CS465 (User Interface Design). Hourglass tracks the user's online activity and provides visual cues about recurring or habitual distractions during the workday.
 <i class="home_hide_content">I mainly contributed as a front-end engineer on this project, but I also contributed a lot as a designer. Our front-end was built with JavaScript and d3.js.
</i> </p>
                            </div>
                            <div class="middle_pane">
                                {/* <img src="img/HourGlass.png"> */}
                            </div>
                            <div class="right_pane">
                                <div class="split">
                                    <h3>Timeline:</h3>
                                    <p>October - December 2018</p>
                                </div>
                                <div class="split">
                                    <h3>Tools:</h3>
                                    <p>JavaScript, d3.js, jQuery</p>
                                </div>
                                <div class="split">
                                    <h3>Affiliation:</h3>
                                    <p>Front-end Development, UX Research, UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                        <h3 id="enter_tips"> Click here to enter </h3>
                    </div>
                </a>
            </div>
        </div>
        <div class="project_preview_container">
            <div class="main_container">
                <a href="javascript:delay('dow_request.html')">
                    <div class="card_container" id="drd">
                        <h2>Maintenance Request Design</h2>
                        <div class="bottom_wrapper">
                            <div class="left_pane">
                                <h3>Background:</h3>
                                <p>Employees working at the Shanghai Dow Center are able to use their phones to submit maintenance request forms. In 2019, I worked on a project re-designing these forms to improve their aesthetics and usability. This significantly decreased the amount of time users would waste submitting a simple request.
                                    <i class="home_hide_content">For this project, I worked a lot with the internal maintenance teams, trying to understand their pipelines and processes. 
 </i> </p>
                            </div>
                            <div class="middle_pane">
                                {/* <img src="img/Dow_Maintenance.png"> */}
                            </div>
                            <div class="right_pane">
                                <div class="split">
                                    <h3>Timeline:</h3>
                                    <p>July - August 2019 (2 Weeks)</p>
                                </div>
                                <div class="split">
                                    <h3>Tools:</h3>
                                    <p>Sketch, Figma, CSS3 </p>
                                </div>
                                <div class="split">
                                    <h3>Affiliation:</h3>
                                    <p>User-Experience Design, User-Interface Design</p>
                                </div>
                            </div>
                        </div>
                        <h3 id="enter_tips"> Click here to enter </h3>
                    </div>
                </a>
            </div>
        </div>


    </div>
  )
}


export default ProjectMenu