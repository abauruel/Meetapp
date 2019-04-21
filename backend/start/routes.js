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

Route.post('User', 'UserController.store').validator('User')
Route.put('User', 'UserController.update').middleware(['auth'])

Route.post('Session', 'SessionController.store')
Route.resource('Preference', 'PreferenceController').apiOnly()
Route.group(() => {}).middleware(['auth'])

Route.post('Meetup', 'MeetupController.store')
Route.get('Meetup', 'MeetupController.show')
Route.get('Meetups', 'MeetupController.index')
