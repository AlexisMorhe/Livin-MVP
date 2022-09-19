import User from '../../models/User';
import conectarDB from "../../lib/dbConnect";

export default async function handler(req, res) {

  await conectarDB()

  const {method} = req;
  switch (method){
    case 'POST':
      try {
        const user = new User(req.body);
        await user.save()

        return res.json({success: true, user})

      } catch (error) {
        return res.status(400).json({success: false, error: 'Falla de servidor'});
      }
    default:
      return res.status(500).json({success: false, error: 'Falla de servidor'});
  }
}
