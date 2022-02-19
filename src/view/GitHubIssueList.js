import React, {useState, useEffect} from 'react';
import { getIssues } from '../api/githubApi';
import GitHubIssue from '../common/GitHubIssue';

const user = "Zyglyuk";
const repo = "sun-06-repo";

const GitHubIssueList = () => {
    const [issues, setIssues] = useState([])

    useEffect(() => {
        console.log('test')
        getIssues(user, repo).then(response => {
            if (response.code === 200) {
                console.log("resp", response.data)
                setIssues(response.data)
            }
        })
    }, []);

    return (
        <div>
            <h5>ISSUES</h5>
            {issues.map(issue => <GitHubIssue issue={issue}/>)}
        </div>
    );
}

export default GitHubIssueList;
