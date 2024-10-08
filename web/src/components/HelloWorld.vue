<!--
  Welcome to lj-boilerplate, the official Vite, Vue & TailwindCSS playground!

  Everything here works just like it does when you're running locally with a
  real build version.

  Feel free to play with this example if you're just learning, or trash it and
  start from scratch if you know what you are doing. Have fun!
-->

<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 px-8"
  >
    <div
      class="absolute left-[calc(70%-4rem)] top-10 -z-10 transform-gpu blur-3xl"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 left-0 z-[-10] w-screen h-screen bg-gradient-to-r from-[#00F9B9]/5 to-[#00F9B9]/10 backdrop-filter backdrop-blur-xl"
        style="clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 30% 100%, 0% 100%)"
      ></div>
    </div>
    <div
      class="relative border-2 border-[#00F9B9] bg-black/10 backdrop-blur-xl px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
    >
      <div class="mx-auto max-w-md">
        <img
          src="/img/lj-boilerplate.svg"
          class="mx-auto h-[70px] w-auto"
          alt="lj-boilerplate"
        />

        <div class="space-y-6 py-8 text-sm text-gray-300">
          <p class="text-gray-100 text-base">
            Thank you for choosing to use my boilerplate! I hope it has been
            helpful and saved you some time in your development process.
          </p>
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg
                class="h-6 w-6 flex-none fill-transparent stroke-[#00F9B9] stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p class="ml-2">Vite for fast, modern builds</p>
            </li>
            <li class="flex items-center">
              <svg
                class="h-6 w-6 flex-none fill-transparent stroke-[#00F9B9] stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p class="ml-2">
                Vue for a powerful and intuitive UI development experience
              </p>
            </li>
            <li class="flex items-center">
              <svg
                class="h-6 w-6 flex-none fill-transparent stroke-[#00F9B9] stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p class="ml-2">TailwindCSS for easy, customizable styling</p>
            </li>
            <li class="flex items-center">
              <svg
                class="h-6 w-6 flex-none fill-transparent stroke-[#00F9B9] stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p class="ml-2">Customizable configuration options</p>
            </li>
            <li class="flex items-center">
              <svg
                class="h-6 w-6 flex-none fill-transparent stroke-[#00F9B9] stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p class="ml-2">Lightweight and easy to use</p>
            </li>
          </ul>
        </div>
        <div class="text-base font-semibold leading-7 flex flex-col w-full">
          <p>Socket connection:
            <span v-if="isSocketConnected" class="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
            <span v-else class="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>
        </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import useSocket from "../composables/useSocket";

const { currentSocket, initialiseSocketConnections } = useSocket();

const isSocketConnected = ref(false);

onMounted(() => {
  initialiseSocketConnections();
});

watch(currentSocket, (socket) => {
  if (socket) {
    isSocketConnected.value = true;
  }
});
</script>
