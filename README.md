# social-network-gab

> 🚧 Projet en développement – MVP d’un réseau social original basé sur la cooptation par thème

## 📱 Concept

Ce réseau social vise à **mettre des gens en relation via une chaîne d'invitations**, selon un thème défini par le créateur du groupe.

### 🔗 Exemple concret

> Thème : *Les personnes les plus belles que je connaisse*

- Je crée un groupe, limité à 10 personnes.
- J’invite une fille que je trouve jolie.
- Elle invite un garçon qu’elle trouve beau.
- Il invite une fille qu’il trouve jolie… et ainsi de suite.
- Résultat : un groupe unique construit à travers une chaîne d'invitations, équilibrée, filtrée, et thématisée.

Les thèmes peuvent varier :  
- Les gens les plus drôles
- Ceux partis au Japon
- Les personnes les plus intelligentes
- Etc.

Chaque groupe peut définir :
- Le **thème**
- Le **nombre maximum de membres**
- Les **règles d’entrée** (parité, affinité, géographie…)

## 🛠️ Objectif

Développer un MVP fonctionnel **rapidement** pour tester le concept et inviter des premiers utilisateurs.

---

## 🚀 Stack technique prévue (MVP)

- **Front-end mobile** : [Expo + React Native](https://expo.dev)
- **Back-end** : [Firebase](https://firebase.google.com) (Auth, Firestore, Storage)
- **Auth** : Email / téléphone
- **Stockage** : Firestore (Groupes, Users, Invitations)
- **Déploiement rapide** : Expo Go pour les tests, TestFlight pour iOS, APK pour Android

---

## ✅ Prochaine étape

1. Créer les maquettes simples (Figma ou papier)
2. Coder les vues principales :
   - Page d’accueil
   - Création de groupe
   - Envoi d’invitation
   - Affichage de la chaîne
3. Implémenter Firebase (Auth + Firestore)
4. Tester avec un groupe réel

---

## 🧪 Suivi de développement

- [x] Initialisation du projet avec Expo
- [ ] Création des écrans
- [ ] Connexion Firebase
- [ ] Envoi d'invitations
- [ ] Création dynamique de chaînes
- [ ] MVP terminé
