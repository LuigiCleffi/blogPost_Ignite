import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/luigicleffi.png",
            name: "Luigi Cleffi",
            role: "Web Developer"
        },
        content: [
            { type: "paragraph", content: 'Fala galeraa 👋' },
            { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: "link", content: ' 👉jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-12-03 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/IsmaelDeSouzaDias.png",
            name: "Ismael De Souza",
            role: "Web Developer"
        },
        content: [
            { type: "paragraph", content: 'Fala galeraa 👋' },
            { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀 👉' },
            { type: "link", content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-12-05 13:47:00')
    }
]

function App() {
    return (
        <div className="App">
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt} />

                        )
                    })}
                </main>
            </div>
        </div>
    );
}

export default App;
