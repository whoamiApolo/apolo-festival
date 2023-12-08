import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3mMoMpbfsRwhjJRJND9mWBw2uhjlYYSG32UYjnl0DOkZPedBQ",
      name: "Kendrick Lamar",
      role: "Rapper, produtor musical e compositor",
    },
    content: [
      { type: "paragraph", content: "Kendrick se apresentou no festival ApoloRapFest em São Paulo, Brasil. Ele encantou o público com suas performances eletrizantes de hits como “Humble” e “Love”. A multidão foi ao delírio quando Kendrick, em um gesto de humildade e amor, desceu do palco para cantar junto com seus fãs."},
      { type: "paragraph", content: "Ele mencionou que voltará. Segundo Kendrick: “Brasil, eu voltarei em breve!” Essa promessa deixou o público em êxtase, ansioso por sua próxima visita."},
      { type: "link", content: "#Humble #Love #ApoloRapFest #KendrickNoBrasil" },
    ],
    publishedAt: new Date("2023-11-05 23:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://yt3.googleusercontent.com/W5bBi9to01XIYh1P9t6xJxyHQDeh0Jc1mWYy3IWSzKVxRO3FsYfcjco9orkBzxDylNZmFkPJovM=s176-c-k-c0x00ffffff-no-rj",
      name: "Racionais Mc",
      role: "Grupo Musical",
    },
    content: [
      { type: "paragraph", content: "ApoloRapFest aconteceu e foi mil grau!! Racionais MC’s dominou o palco com suas letras poderosas e batidas inesquecíveis. Mesmo sob a chuva, os fãs cantaram junto cada verso, provando que a música é mais forte que qualquer tempestade." },
      { type: "paragraph", content: "Obrigado a todos os fãs que colaram e fizeram questão de prestigiar o show mesmo na chuva." },
      { type: "link", content: "#ForteAbraço #RacionaisMCs #ApoloRapFest" },
    ],
    publishedAt: new Date("2023-05-07 21:30:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
