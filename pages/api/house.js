import House from '../../models/house';
import conectarDB from "../../lib/dbConnect";


export default async function handler(req, res) {
  try {
    await conectarDB();
    console.log(req.body);
    const house = new House(req.body);
    await house.save();
    return res.status(200).json({success: true});
  } catch (err) {
    console.log(err);
  }
}