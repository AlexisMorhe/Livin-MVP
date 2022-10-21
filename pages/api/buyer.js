import Buyer from '../../models/Buyer';
import conectarDB from "../../lib/dbConnect";

export default async function handler(req, res) {
  try {
    await conectarDB()
    console.log(req.body);
    const buyer = new Buyer(req.body);
    await buyer.save();
    return res.status(200).json({success: true});
  } catch (err) {
    console.log(err.response.status);
  }
}
