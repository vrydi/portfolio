<template>
  <hero />

  <section class="jobs my-8">
    <h2 class="subheader">Experience</h2>
    <div class="cards">
      <UCard>
        <div class="content">
          <h3 class="text-2xl font-bold">Front-end developer</h3>
          <p class="text-sm text-gray-500">WISA</p>
          <p class="text-sm text-gray-500">Belgium</p>
          <p class="text-sm text-gray-500">April 2023 - present</p>
          <p class="mt-2">
            I am currently working as a front-end developer at WISA, where I am
            responsible for developing and maintaining the front-end of the
            schoolware application. I work with a
            <span class="highlight">team of developers</span> to ensure that the
            application is user-friendly and meets the needs of the users. I am
            also responsible for implementing new features and fixing bugs in
            the application.<br /><br />
            I work with a variety of technologies, including
            <span class="highlight">Vue.js, Vite.js, and Bootstrap</span>. I am
            constantly learning new technologies and improving my skills as a
            developer.<br /><br />
            I am also involved in the design and development of new features for
            the application. I work closely with the back-end developers to
            ensure that the front-end and back-end are integrated seamlessly.
          </p>
        </div>
      </UCard>

      <UCard>
        <div class="content">
          <h3 class="text-2xl font-bold">Engineering Consultant</h3>
          <p class="text-sm text-gray-500">RP One</p>
          <p class="text-sm text-gray-500">Belgium</p>
          <p class="text-sm text-gray-500">July 2022 - December 2022</p>
          <p class="mt-2">
            I worked as an engineering consultant at RP One, where I have done
            various projects. From working for external clients to in house
            development. I have worked with a variety of technologies, including
            <span class="highlight">
              Vue.js, React.js, Angular.js, and Bootstrap</span
            >. I was constantly learning new technologies and improving my
            skills as a developer.<br /><br />
            One of my projects was the redesign of the website for a client. I
            worked closely with the client to understand their needs and
            requirements. I then created a new design for the website that was
            user-friendly and met the needs of the client. The redesign is
            online and is still being used by the client.<br /><br />
          </p>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
</style>
