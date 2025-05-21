<template>
  <main>
    <section class="hero">
      <article class="hero-text">
        <p class="small subheader">Front-end developer</p>
        <h1 class="title">
          Hello, my name is <br /><span class="highlight-secondary"
            >Vrydi Oudewaal</span
          >
        </h1>
        <p>
          I am a young developer with a passion anything front-end related.
          <br />I care about the little things as well as the bigger ones. As my
          motto says
          <span class="highlight-secondary">"Every byte counts"</span>
        </p>

        <div class="buttons">
          <UButton size="lg" :to="{ path: '/projects' }"
            >View my projects</UButton
          >
          <UButton size="lg" :to="{ path: '/contact' }" color="neutral"
            >Contact me</UButton
          >
          <UButton
            size="lg"
            :to="'https://www.linkedin.com/in/vrydioudewaal/'"
            color="neutral"
            target="_blank"
          >
            <UIcon
              name="mdi:linkedin"
              size="1.5rem"
              color="var(--secondary)"
            ></UIcon>
          </UButton>
        </div>
      </article>
    </section>
    <section>
      <div class="hero-image-container">
        <div class="hero-image-background">
          <img
            src="@/assets/images/hero.PNG"
            alt="A picture of me"
            class="hero-image"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 128px);
  overflow: hidden;
}

section {
  width: 50%;
  padding: 2rem;
}

.hero {
  background-image: url("@/assets/images/blob.svg");
  background-size: auto;
  background-repeat: no-repeat;
  transform: rotate(180deg);
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: rotate(180deg);

  backdrop-filter: blur(4px);
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
}

.hero-image-background {
  position: absolute;
  width: 720px;
  height: 720px;
  z-index: -1;
  background-image: url("@/assets/images/blob.svg");
  background-size: cover;
}

.hero-image {
  width: 50%;
  height: 50%;
  display: block;
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.hero-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.buttons {
  display: flex;
  gap: 1rem;
}

@media (max-width: 1375px) {
  main {
    flex-direction: column;
  }
  section {
    width: 100%;
  }

  .hero {
    background-image: none;
  }
}

@media (max-width: 768px) {
  .hero-image-background {
    width: 250px;
    height: 250px;
  }
}
</style>
