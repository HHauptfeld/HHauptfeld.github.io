import React, { Component } from 'react'
import './projects.css'
import ProjectDescription from '../../components/project-description/project-description.js'
import airship from '../../assets/airship.png'
import appOnboarding from '../../assets/app-onboarding.png'
import azurelogo from '../../assets/azure-logo.png'
import bannerweb from '../../assets/bannerweb-redesign.PNG'
import bayesianNetwork from '../../assets/bayesian-network.png'
import connectFour from '../../assets/connect-four.png'
import escapeGame from '../../assets/escape-board.PNG'
import meetingScheduler from '../../assets/meeting-scheduler.png'
import network from '../../assets/machine-learning.png'

export default class Projects extends Component {
    render() {
        return (
            <>
                <h1>This is the projects page!</h1>
                <h2>College Projects</h2>
                <h3>Here are some brief descriptions of my most important projects throughout my time at WPI</h3>
                <ProjectDescription
                    title={"Caching Non-Blocking API Client, Optum, July-August 2020"}
                    text={"I worked in a team of four to prove the efficiency of a caching non-blocking API client. We built blocking, non-blocking, and caching non-blocking API clients"}
                    image={azurelogo}
                    isOdd={true}
                />
                <ProjectDescription
                    title={"Proving the Capabilities of Airship, Optum, June-August 2020"}
                    text={"I worked in a team of nine to prove the capabilities of Airship, a customer engagement platform. We completed proof-of-concept work by constructing demo apps in Android and iOS using Kotlin and Swift. Specifically, I worked on the Android app, integrating different capabilities of Airship such as sending push notifications, researching the Google Fit platform, and interpreting performance analytics. Similarly to the caching non-blocking API client, this project is own by Optum and I cannot share any source code or specific information regarding the project."}
                    image={airship}
                    isOdd={false}
                />
                <ProjectDescription
                    title={"Escape Game, WPI, March-May, 2020"}
                    text={"I used Java to build different variations of Escape, a board game in which the goal is to move pieces until a player escapes from the center of the board. I used test-driven development to structure how I wrote my code. Click <a href=" + "https://github.com/HHauptfeld/Escape-CS4233" + "target=" + "_blank" + "><b>here</b></a> to checkout my final verison of the game on GitHub, including documents that show the requirements of the project, and a written report of what I did."}
                    image={escapeGame}
                    isOdd={true}
                />
                <ProjectDescription
                    title={"Interactive Qualifying Project (IQP), WPI, January-March, 2020 "}
                    text={"As a part of WPI's Development Design Lab, I worked in a team of three to develop teaching and learning material"}
                    image={"https://wp.wpi.edu/developmentdesignlab/files/2020/03/PHOTO-2020-03-02-09-59-36.jpg"}
                    isOdd={false}
                />
                <ProjectDescription
                    title={"Building Machine Learning Models for Action Classification, WPI, October-December, 2019 "}
                    text={"I worked in a team of two to conduct research and build out machine learning models for a data set of different actions performed during experimental sessions. We used Matlab's classification, regression, and clustering algorithms to determine which models worked best for the given data set. Click"}
                    image={network}
                    isOdd={true}
                />
                <ProjectDescription
                    title={"Comparative Sequence Analysis of EEEV, WPI, October-December, 2019"}
                    text={"I worked in a team of five to conduct bioinformatics research on the Eastern Equine Encephalitis virus. We used T-Coffee to perform comparative sequence analyses between EEEV sequences from different years, strains, and host species."}
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHFaTBggqc1xHr0E3D4hIhqr-Hq-6P2d4H0A&usqp=CAU"}
                    isOdd={false}
                />
                <ProjectDescription
                    title={"Bayesian Networks, WPI, October, 2019"}
                    text={"I worked in a team of two to implement a data structure that represents a Bayesian Network. Bayesian Networks models conditional dependence for probability computations. The structure we built represents the nodes, edges, and the conditional probability tables (CPTs) for each node."}
                    image={bayesianNetwork}
                    isOdd={true}
                />
                <ProjectDescription
                    title={"Decision Trees for Connect Four, WPI, September, 2019"}
                    text={"I implemented a decision tree model in Java. The model takes a connect-four board state as input and produces will win if the game is continued. I extracted five features from the raw board state given in the training data set to predict the final winners."}
                    image={connectFour}
                    isOdd={false}
                />
                <ProjectDescription
                    title={"Application Onboarding Interface, Optum, June-August, 2019"}
                    text={"I worked in a team of two to build out a user interface for onboarding applications into an internal company system. We used Angular7 to develop the front-end, utilized an OrientDB database for the back-end, and used serverless functions with Fn Project to serve information throughout the tech stack."}
                    image={appOnboarding}
                    isOdd={true}
                />

                <ProjectDescription
                    title={"Prototype of a New User Interface for Bannerweb, WPI, May, 2019"}
                    text={"I worked in a team of three to build a prototype of a potential re-design for the user interface of Bannerweb. Bannerweb is a software that WPI uses to manage student registration, grades, and other information."}
                    image={bannerweb}
                    isOdd={false}
                />
                <ProjectDescription
                    title={"Meeting Scheduler Application, WPI, October-December, 2018 "}
                    text={"I worked in a team of 4 to build out a meeting scheduler application using Java and AWS. I was responsible for constructing the entire front-end using vanilla HTML, CSS, and Javascript."}
                    image={meetingScheduler}
                    isOdd={true}
                />
            </>
        )
    }
}