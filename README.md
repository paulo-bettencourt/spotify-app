# Kewl Music

Kewl Music, an Angular app built with version 17, seamlessly integrates Signals and RxJs to deliver an immersive musical experience. Styled with Tailwind CSS and rigorously tested with Jest, the app is not only modern and robust but also dockerized for easy deployment. Beyond its technological prowess, Kewl Music connects users to their favorite artists by leveraging two APIs: LastFm and Spotify. Users can effortlessly explore artist bios and discover top 20 tracks, enriching their musical journey with a dynamic and user-friendly interface.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docker

To create a containerized image of the app in Docker, execute the following command:

`docker build -t spotify-app .`

This command will build the Docker image with the tag "spotify-app" based on the Dockerfile in the current directory.

To set up and run the image on Docker, use the following command:

`docker run -p 80:80 spotify-app`

This command will start a Docker container using the "spotify-app" image and map port 80 on the host to port 80 within the container.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest].
