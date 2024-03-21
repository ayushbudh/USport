<div align="center">
  <a href="https://github.com/ayushbudh/USport/">
    <img src="https://i.imgur.com/vmoVu2Z.png" alt="Logo" 
    width="290" height="200">
  </a>

  <h1 align="center">USport</h1>

  <p align="center">
    A platform to connect sports players with other players and trainers to play different sports.
    <br />
    <br />
    <a href="https://github.com/ayushbudh/USport/issues">Report Bug</a>
    ·
    <a href="https://github.com/ayushbudh/USport/issues">Request Feature</a>
  </p>
</div>

## Table of contents
* [Introduction](#introduction)
* [Tech Stack](#tech-stack)
* [Assumptions & Data Interpretation](#assumptions--data-interpretation)
* [Demo](#demo)
* [Links](#links)

## Introduction

USport is a web app that helps sports enthusiasts to play games, network and improve there skills by taking training sessions. The mission of the app is to connect people interested in sports.

## Tech Stack

- Frontend: React.js, MaterialUI
- Backend: Spring Boot
- Database: PostgreSQL
- Other tools: Github (Version control), Figma (Wireframing + Prototyping), Trello (Project management), Diagrams.net (ER Diagrams)

## Assumptions & Data Interpretation

- Group chat:
    - type: 
        - 1: 1-on-1 
        - 0: many-many

- Notifications:
    - type: 
        - 1: Single/multiple users will receive notifications when a game is created to accept/reject a game request (both users => inviter + invited )
        - 2: Message request.
    - state: 
        - 1: Accept
        - -1: Reject
        - 0: Pending 
        <br/><br/>
        Note: Chose this approach instead of ENUM type to save space and for faster lookup.

## Demo

Watch the demo [here](https://firebasestorage.googleapis.com/v0/b/ayushbudhwani.appspot.com/o/usportdemo.mp4?alt=media&token=b97df36a-b7d6-4cf2-859e-bd0704f28423).

## Links

- Project Proposal: [Google Docs](https://docs.google.com/document/d/1ALS-tnXgEyJdj4604rwOM5a7LJ7nEwOcnfoNl35ymxc/edit?usp=sharing)
- Prototype: [Figma](https://www.figma.com/file/ecFlbFy8guVdKVo83zU5ge/USports?node-id=0%3A1&t=qgGYyfMIjjPegqiG-1)
- ER Diagram: [Diagrams.net](https://drive.google.com/file/d/1DvnPQKrhgMivjMFpho0BXD23qnv_dj3X/view?usp=sharing)
