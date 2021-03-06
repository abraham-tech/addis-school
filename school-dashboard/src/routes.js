import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import StudentListView from 'src/views/student/StudentListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import EventListView from 'src/views/event/EventListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import CalendarView from 'src/views/calendar/CalendarView';
import GroupsView from 'src/views/group/GroupsView';
import InboxView from 'src/views/inbox/InboxView';
import HelpView from 'src/views/help/HelpView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'calendar', element: <CalendarView /> },
      { path: 'students', element: <StudentListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'group', element: <GroupsView /> },
      { path: 'help', element: <HelpView /> },
      { path: 'inbox', element: <InboxView /> },
      { path: 'events', element: <EventListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/students" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
