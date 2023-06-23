import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(username: string, password: string) {
    // Lógica para realizar la autenticación con el backend
    // Puedes usar HTTP requests, Firebase, u otros métodos para realizar la autenticación
    // Aquí puedes implementar tu lógica personalizada para verificar las credenciales del usuario
    // Por ejemplo, puedes enviar una solicitud HTTP al backend y verificar la respuesta
    
    // Simulación de autenticación exitosa
    if (username === 'usuario' && password === 'contraseña') {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true'); // Opcional: Guarda el estado de inicio de sesión en el almacenamiento local
    }
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn'); // Opcional: Elimina el estado de inicio de sesión del almacenamiento local
  }

  isAuthenticated(): boolean {
    // Comprueba si el usuario ha iniciado sesión consultando el estado almacenado o cualquier otra lógica personalizada
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn ? true : false;
  }
}
