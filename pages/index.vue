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
</style>
