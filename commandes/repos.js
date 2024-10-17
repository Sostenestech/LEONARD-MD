"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "❄️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Sostenestech/LEONARD-MD';
  const img = 'https://files.catbox.moe/ps8cqh.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*Hi,I am* *Leonard-Md.*\n  
 *Pair Code* https://Leonard-session.onrender.com/
 *Repo:* ${data.html_url}
 *Stars:* ${repoInfo.stars}
 *Forks:* ${repoInfo.forks}
 *Released Date:* ${releaseDate}
 *Updated on:* ${repoInfo.lastUpdate}
 *Owner:* *Leonard*
__________________________________
            *Leornard-Md*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
