import Seller from '../../models/Seller';
import conectarDB from "../../lib/dbConnect";

export default async function handler(req, res) {
  try {
    await conectarDB();
    console.log(req.body);
    const seller = new Seller(req.body);
    await seller.save();
    return res.status(200).json({success: true});
  } catch (err) {
    console.log(err);
  }
}