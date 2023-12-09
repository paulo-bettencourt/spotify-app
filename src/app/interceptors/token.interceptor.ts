import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  if(localStorage.getItem('SPOTIFY_TOKEN')) {
    return next(req);
  } else {
    console.log("entrou aqu ium erro")
    throw new HttpErrorResponse({
      error: 'err'
    });
  }

};
