import express from 'express'
import dotenv from 'dotenv'

const ejaz = express();
dotenv.config()
const PORT = process.env.PORT || 5000 
const githubData ={
  "user": {
    "username": "ejazdev",
    "name": "Ejaz Ahmed",
    "bio": "Full Stack Developer | React | Java | MERN Stack",
    "location": "Bhilai, Chhattisgarh, India",
    "followers": 150,
    "following": 42,
    "public_repos": 8,
    "profile_url": "https://github.com/ejazdev",
    "avatar_url": "https://avatars.githubusercontent.com/u/12345678?v=4"
  },
  "repositories": [
    {
      "name": "pharma-management-system",
      "description": "A complete pharma management platform built with MERN stack",
      "language": "JavaScript",
      "stars": 45,
      "forks": 12,
      "created_at": "2023-08-10T12:30:00Z",
      "updated_at": "2025-08-10T15:45:00Z",
      "repo_url": "https://github.com/ejazdev/pharma-management-system"
    },
    {
      "name": "fees-management-website",
      "description": "Fees management system with secure login and payment gateway integration",
      "language": "Java",
      "stars": 30,
      "forks": 8,
      "created_at": "2024-05-12T09:15:00Z",
      "updated_at": "2025-08-05T10:20:00Z",
      "repo_url": "https://github.com/ejazdev/fees-management-website"
    },
    {
      "name": "portfolio-react",
      "description": "Personal portfolio website built with React and Tailwind CSS",
      "language": "JavaScript",
      "stars": 20,
      "forks": 5,
      "created_at": "2024-11-01T18:00:00Z",
      "updated_at": "2025-07-25T11:40:00Z",
      "repo_url": "https://github.com/ejazdev/portfolio-react"
    }
  ],
  "activity": [
    {
      "type": "PushEvent",
      "repo": "ejazdev/pharma-management-system",
      "commit_message": "Fixed payment gateway bug",
      "timestamp": "2025-08-10T14:32:00Z"
    },
    {
      "type": "PullRequestEvent",
      "repo": "ejazdev/fees-management-website",
      "title": "Add admin dashboard feature",
      "timestamp": "2025-08-08T10:25:00Z"
    },
    {
      "type": "IssueCommentEvent",
      "repo": "ejazdev/portfolio-react",
      "comment": "Thanks for the feedback! Fixed the responsive design issue.",
      "timestamp": "2025-08-05T17:50:00Z"
    }
  ]
}



ejaz.get('/',(req,res)=>{res.send('ejaz')})
ejaz.get('/login',(req,res)=>{res.send('login hogaya')})
ejaz.get('/git',(req,res)=>{
    res.json(githubData)
})
ejaz.listen(process.env.PORT,()=>{console.log(`the server is ready : ${PORT}`)
})
