<template>
  <div
    className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
  >
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      class="h-10 w-10 ml-5 mt-2 mb-2"
    />
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
