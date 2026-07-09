import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { Component } from "react";

const routes = [
  {
    path: "/",
    name: "Home",
    Component: HomeView,
  },
];
