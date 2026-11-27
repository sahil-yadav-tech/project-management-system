import ApiResponse from "../../../utils/ApiResponse.js";
import { registerService } from "../services/auth.services.js";

export const register = async (req, res) => {

    const data = await registerService(req.body);

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                "User registered successfully",
                data
            )
        );
};