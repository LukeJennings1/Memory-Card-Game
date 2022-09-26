import GitHubLogo from './card photos/GitHub-Mark-Light-64px.png'



function Footer() { 

    return (
        <div className="lowerThirdFooter">
            <div className="nameField">Made by Luke Jennings 2022 </div>
            <a href='https://github.com/LukeJennings1'>
            <img src = {GitHubLogo} className="githubLogo"></img>
            </a>
        </div>
    )
}

export default Footer;