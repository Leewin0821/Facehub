const mockUserlist = [
   {
     "name": "CC",
      "office": "Hot",
      "title": "HR",
      "photo": "http://7xr6pw.com1.z0.glb.clouddn.com/5fb969f7e4354c92bb0276199754de38.png",
      "created_at": "2016-03-04 15:38:48",
      "id": 1499,
      "project": "Hot HR",
      "avatar": "http://7xr6pw.com1.z0.glb.clouddn.com/76cb804727c9596df57dbaddd41c3599.png",
      "onboard": "2014-12-04",
      "email": "cc@sample.com"
    },
    {
      "name": "LG",
      "office": "Old",
      "title": "Dev",
      "photo": "http://7xr6pw.com1.z0.glb.clouddn.com/f9885c0f83ed4420b44f61421f04e664.png",
      "created_at": "2016-03-04 15:57:00",
      "id": 1500,
      "project": "Water",
      "avatar": "http://7xr6pw.com1.z0.glb.clouddn.com/e877be36603353167125fa37060ea80f.png",
      "onboard": "2015-07-06",
      "email": "lg@sample.com"
    }
];

export const FETCH_USER = "FETCH_USER"
export function UserListAction(data = mockUserlist) {
  return {
    type: FETCH_USER,
    payload: data
  }
}
