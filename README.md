# Kewl Music

Kewl Music, an Angular app built with version 17, seamlessly integrates Signals and RxJS to deliver an immersive musical experience. Styled with Tailwind CSS and rigorously tested with Jest, the app is not only modern and robust but also dockerized for easy deployment. Beyond its technological prowess, Kewl Music connects users to their favorite artists by leveraging two APIs: LastFM and Spotify. Users can effortlessly explore artist bios and discover top 20 tracks, enriching their musical journey with a dynamic and user-friendly interface.

## Screenshots

### Web

<img width="1792" alt="Screenshot 2023-12-13 at 19 31 30" src="https://github.com/paulo-bettencourt/spotify-app/assets/37920932/7ed08571-7b86-4652-aaea-dcb6705ad466">

<img width="1792" alt="Screenshot 2023-12-13 at 19 31 39" src="https://github.com/paulo-bettencourt/spotify-app/assets/37920932/83f681d6-ae9e-41d0-8733-d2162a8e7d3f">

### Mobile

<img width="1114" alt="Screenshot 2023-12-13 at 19 34 15" src="https://github.com/paulo-bettencourt/spotify-app/assets/37920932/fa89b431-8d9b-489b-a13c-6ed21c7cdbfa">

<img width="1114" alt="Screenshot 2023-12-13 at 19 34 40" src="https://github.com/paulo-bettencourt/spotify-app/assets/37920932/9a2a600d-028b-40e0-8dbc-00b7f79fbf35">

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docker

To create a containerized image of the app in Docker, execute the following command:

`docker build -t spotify-app .`

This command will build the Docker image with the tag "spotify-app" based on the Dockerfile in the current directory.

To set up and run the image on Docker, use the following command:

`docker run -p 80:80 spotify-app`

This command will start a Docker container using the "spotify-app" image and map port 80 on the host to port 80 within the container.

## Technologies Used

- Frontend: Angular v17.0.0
- Styling: Tailwind v5.2.2
- Testing: Jest v29.7.0
- Server-side rendering v17.0.6
- API: LastFM && Spotify
- Containerized image: Docker
- State Management: Signals && RxJS Interop

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest].
