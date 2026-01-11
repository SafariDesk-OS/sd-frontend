import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { useAuthStore } from '../../stores/authStore';

export const Layout: React.FC = () => {
  const { isAuthenticated, fetchCurrentUserProfile, user } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      fetchCurrentUserProfile();
    }
  }, [isAuthenticated, fetchCurrentUserProfile]);

  // Handle Favicon Update
  useEffect(() => {
    if (user?.business?.favicon_url) {
      const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = user.business.favicon_url;
      } else {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = user.business.favicon_url;
        document.head.appendChild(newLink);
      }
    }
  }, [user?.business?.favicon_url]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
};
