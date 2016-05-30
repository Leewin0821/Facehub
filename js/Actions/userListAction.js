const mockUserlist = [
  {
    name: 'Iron Man',
    office: 'Hot',
    title: 'Rich',
    photo: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg',
    created_at: '2016-03-04 15:38:48',
    id: 1499,
    project: 'S.H.I.E.L.D',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg',
    onboard: '2014-12-04',
    email: 'ironman@sample.com'
  },
  {
    name: 'Captain',
    office: 'Old',
    title: 'Undercover',
    photo: 'http://i1.wp.com/cdn.bgr.com/2014/04/captain-america.jpg?w=625',
    created_at: '2016-03-04 15:57:00',
    id: 1500,
    project: 'Hydra',
    avatar: 'http://i1.wp.com/cdn.bgr.com/2014/04/captain-america.jpg?w=625',
    onboard: '2015-07-06',
    email: 'captain@sample.com'
  }
]

export const FETCH_USER = 'FETCH_USER'
export function userListAction(data = mockUserlist) {
  return {
    type: FETCH_USER,
    payload: data
  }
}
