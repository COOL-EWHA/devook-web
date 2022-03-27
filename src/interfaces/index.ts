export * from './INotification';
export * from './IUser';
export * from './IPost';
export * from './IBookmark';

declare global {
  interface Window {
    AuthChannel?: Window;
    DeviceChannel?: Window;
    Toaster?: Window;
  }
}
