"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/navbar";
import CardTable from "@/components/card";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
  
  <br />

      <br />
      <br />
      <CardTable/>
    </>
  );
}
