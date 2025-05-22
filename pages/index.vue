<template>
  <hero />

  <section class="my-8">
    <h2 class="subheader">Experience</h2>
    <div class="jobs">
      <div class="timeline"></div>
      <div class="cards">
        <UCard>
          <div class="cards-blob"></div>
          <div class="content">
            <h3 class="text-2xl font-bold">Front-end developer</h3>
            <p class="text-sm text-gray-500">WISA</p>
            <p class="text-sm text-gray-500">Belgium</p>
            <p class="text-sm text-gray-500">April 2023 - present</p>
            <p class="mt-2">
              I’m currently working as a front-end developer at WISA, where I am
              responsible for developing and maintaining the front-end of the
              schoolware application. My main responsibilities include
              implementing new features and bug-fixing. Working with a team of
              developers, we ensure that our application is user-friendly and
              meets the needs of the end users.
              <br /><br />
              My work involves a variety of technologies, including
              <span class="highlight">Vue.js, Vite.js, SVN, and Bootstrap</span
              >. I’m constantly learning new technologies and looking to improve
              my skills as a developer. <br /><br />
              I’m also responsible for ensuring that the application is
              responsive and works well on all devices. I work closely with the
              design team to ensure that the application is
              <span class="highlight">visually appealing</span> and easy to use.
              I’m also responsible for testing the application to ensure that it
              is free of bugs and works as intended. <br /><br />
              Working closely with the back-end developers, I help ensure that
              the front-end and back-end are integrated seamlessly through my
              involvement in the design and development of new features.
            </p>
          </div>
        </UCard>

        <UCard>
          <div class="cards-blob"></div>
          <div class="content">
            <h3 class="text-2xl font-bold">Engineering Consultant</h3>
            <p class="text-sm text-gray-500">RP One</p>
            <p class="text-sm text-gray-500">Belgium</p>
            <p class="text-sm text-gray-500">July 2022 - December 2022</p>
            <p class="mt-2">
              As an engineering consultant at RP One, I worked on various
              projects. From working for
              <span class="highlight">external clients</span> to
              <span class="highlight">in house development</span>, I was able to
              learn a variety of technologies, including
              <span class="highlight"
                >Vue.js, React.js, Angular.js, GIT, and Bootstrap as well as
                TailwindCSS</span
              >. My skills as a developer improved quickly through the acquired
              knowledge in the various technologies. <br /><br />
              An important project I worked on was the redesign of a website for
              a client. Working closely with the client to understand their
              needs and requirements, I was able to create a new design for the
              website that was user-friendly and met the standards provided.
              This redesign is currently online and is still being used today by
              the client.
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </section>

  <section class="my-8">
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
.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.cards > div {
  width: 80%;
}

.cards > div:nth-child(2) {
  margin-left: auto;
}

.cards-blob {
  width: 36px;
  height: 36px;
  background-color: var(--secondary);
  border-radius: 50%;

  position: absolute;
  left: calc(-3.25rem + 13px);
}

.cards > div:nth-child(2) .cards-blob {
  left: calc(-3.25rem + 13px);
}

.jobs {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
}

.timeline {
  content: "";
  width: 10px;
  height: 100%;
  background-color: var(--secondary);
  border-radius: 50px;
}

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
