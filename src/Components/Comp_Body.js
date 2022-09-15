import '../App.css';
import 'bootstrap';
import {Octokit} from "octokit";
import {useEffect, useState} from "react";

const Comp_Body= () => {
    useEffect(() => {
        fetch("https://api.github.com/users/MugenZeta")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    //setAvatarURL(result.avatar_url);
                    //setGitHubUsername(result.login);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);
    return(
        <body>

        <h1 className={"center-object"}>Welcome to my website Application</h1>
            <div className={"bg-black"}>
                <div className={"center-position"}>
                    <p></p>
                </div>
            </div>
        </body>
    );
}

export default Comp_Body;