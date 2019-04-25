'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('User', 'userController.store').validator('User')
Route.put('User', 'userController.update').middleware(['auth'])
Route.get('firstLogin', 'userController.isFirstLogin').middleware(['auth'])

Route.get('Usernotin', 'userController.showMeetupsNotRegistred').middleware([
  'auth'
])
Route.get('UserMeetups', 'userController.showMeetupsRegistred').middleware([
  'auth'
])

Route.post('Session', 'sessionController.store')
Route.resource('Preference', 'preferenceController').apiOnly()
Route.group(() => {}).middleware(['auth'])

Route.post('Meetup', 'meetupController.store')
Route.get('Meetup', 'meetupController.show')
Route.get('Meetups', 'meetupController.index')

Route.post('Incription/:id', 'inscripitonController.store').middleware(['auth'])
Route.put('Incription/:id', 'inscripitonController.update').middleware(['auth'])
