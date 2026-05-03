import { createOrUpdateUser, getUserProfile } from '../services/firebaseUsers';
import { UserProfile } from '../types';

class AuthService {
  private _currentUser: UserProfile | null = null;
  private _listeners = new Set<(user: UserProfile | null) => void>();

  onAuthChange(callback: (user: UserProfile | null) => void) {
    this._listeners.add(callback);
    
    // Simular estado inicial
    setTimeout(() => {
      callback(this._currentUser);
    }, 100);
    
    return () => {
      this._listeners.delete(callback);
    };
  }

  async signInWithGoogle(): Promise<UserProfile> {
    try {
      console.log('🚀 Simulando Google Sign-In...');
      
      // Crear usuario simulado completamente
      const mockUser = {
        uid: 'demo_' + Date.now(),
        displayName: 'Usuario Demo',
        email: 'usuario.demo@gmail.com',
        photoURL: null
      };
      
      const userProfile = await createOrUpdateUser(
        mockUser.uid,
        mockUser.displayName,
        mockUser.email,
        mockUser.photoURL,
        'google'
      );
      
      // Guardar usuario actual y notificar listeners
      this._currentUser = userProfile;
      this._listeners.forEach(callback => callback(userProfile));
      
      console.log('✅ Login exitoso (demo):', userProfile.email);
      return userProfile;
    } catch (error) {
      console.error('❌ Error en login:', error);
      throw error;
    }
  }

  async signOut(): Promise<void> {
    this._currentUser = null;
    this._listeners.forEach(callback => callback(null));
    console.log('✅ Sesión cerrada');
  }

  getCurrentUser(): UserProfile | null {
    return this._currentUser;
  }
}

export const authService = new AuthService();