import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Comment } from './components/Commet'
import './global.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

interface Posts extends PostProps {
    id: number
}

const posts: Posts[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/Leloucki.png',
            name: 'Leloucki',
            role: 'Developer FullStack.',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-12-31 20:00:00'),
    },

    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/AlexSousa4.png',
            name: 'Alex Souza',
            role: 'Web Developer Jr.',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-01-01 9:00:00'),
    },
]

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}
