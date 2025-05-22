<template>
  <section class="my-8" id="projects">
    <h2 class="subheader">Projects</h2>
    <section class="projects">
      <UCard class="project-card">
        <div class="project">
          <div class="content">
            <h3 class="text-2xl font-bold">Discord bot</h3>
            <p>
              A bot made for discord for a private server. it is a bot that
              handles server verification, team management, and a few other
              things. It is a bot that I made in my spare time.
              <br /><br />
              The project was made with Discord.ts and is still in development.
            </p>
            <UButton
              :to="'https://github.com/vrydi/awoo_tg'"
              target="_blank"
              color="secondary"
              class="mt-2"
              >View project</UButton
            >
          </div>
        </div>
      </UCard>

      <UCard class="project-card">
        <div class="project">
          <div class="content">
            <h3 class="text-2xl font-bold">Elsyum, a DND website</h3>
            <p>
              A personal project for ou DND campaign. It features quest
              tracking, session tracking, map tracking, note taking, and so much
              more. itr is made using vue.js and vue.ts, with a backend made
              using node.js and express.js.
            </p>
            <UButton
              :to="'https://github.com/vrydi/elsyum-vue'"
              target="_blank"
              color="secondary"
              class="mt-2"
              >View project</UButton
            >
          </div>
          <img
            src="@/assets/images/elsyum.png"
            class="w-full h-96 shadow-lg rounded-lg"
            alt=""
          />
        </div>
      </UCard>

      <UCard class="project-card">
        <div class="project">
          <div class="content">
            <h3 class="text-2xl font-bold">Pokemon game</h3>
            <p>
              A school project I made in which you can battle a pregenerated
              team using a randomly generated team of pokemon. The project was
              made using React.js and was a great way to learn the basics of
              React.js. It includes GIT, GH-pages, localstorage, PWA and is thus
              installable and playable without the need of a browser after an
              initial install.
              <br /><br />
              This project earned me the maximum of the points for the project.
            </p>
            <UButton
              :to="'https://vrydi.github.io/pokemon_battle/'"
              target="_blank"
              color="secondary"
              class="mt-2"
              >View project</UButton
            >
          </div>
          <iframe
            class="w-full h-96 shadow-lg rounded-lg"
            src="https://vrydi.github.io/pokemon_battle/"
            title="Pokemon game"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </UCard>

      <UCard class="project-card">
        <div class="project">
          <div class="content">
            <h3 class="text-2xl font-bold">Uno game</h3>
            <p>
              A project that I made in my spare time. It is a game of Uno that
              can be played offline due to the PWA functrionality. It is a great
              way to pass some time with some others.
              <br /><br />
              The project was made using React.js and has PWA functionality,
              allowing it to be installed and played without the need of a
              browser after an initial install. It includes GIT, GH-pages,
              service worker notifications and bootstrap
            </p>
            <UButton
              :to="'https://vrydi.github.io/uno-pwa/'"
              target="_blank"
              color="secondary"
              class="mt-2"
              >View project</UButton
            >
          </div>
          <iframe
            class="w-full h-96 shadow-lg rounded-lg"
            src="https://vrydi.github.io/uno-pwa/"
            title="Uno game"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </UCard>

      <UCard class="project-card">
        <div class="project">
          <div class="content">
            <h3 class="text-2xl font-bold">Tic tac toe game</h3>
            <p>
              A small project that I made in my spare time. It is a very simple
              game of Tic tac toe
              <br /><br />
              The project was made using React.js, GIT and is hosted on
              Cloudfare under my domain.
            </p>
            <UButton
              :to="'https://tic-tac-toe.vrydi.dev'"
              target="_blank"
              color="secondary"
              class="mt-2"
              >View project</UButton
            >
          </div>
          <iframe
            class="w-full h-96 shadow-lg rounded-lg"
            src="https://tic-tac-toe.vrydi.dev"
            title="Uno game"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </UCard>
    </section>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  display: flex;
  gap: 1rem;
}

.project {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

.project-card:nth-child(2n) .project .content {
  order: 2;
}
</style>
