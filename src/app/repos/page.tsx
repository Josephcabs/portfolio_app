import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Repos() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-[#666] ">
                <h1 className="flex tems-center justify-center text-4xl font-bold py-12 text-4xl bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow">
                    Repositories
                </h1>
                <div className="flex flex-row items-center justify-center">
                <div className="w-1/3 flex justify-center text-4xl p-5">
                <Card 
                className='transition-all duration-300 border-2 border-transparent hover:border-red-600 hover:shadow-lg hover:shadow-red-600'
                sx={{ maxWidth: 600, color: "#666", backgroundColor: "#171717" }}
                >
                    <CardMedia
                    component="img"
                    height="140"
                    image='/project.png'
                    />
                    <CardContent className="text-center text-[#666]">
                        <Typography gutterBottom variant="h5" component="div" >
                            Ecommerce Site 
                        </Typography>
                        <Typography variant="h6">
                            Description:
                        </Typography>
                        <Typography component="div">
                            In this project I was responsible for the following: 
                            <br/><br/>
                                with making api calls to get the data from the api and display it on all the pages,
                                styling the page and making it look good,
                                managing the database,
                                making the cart page ,
                                checkout page ,

                        </Typography>
                        </CardContent>
                </Card>
                </div>
                <div className="w-1/3 flex justify-center text-4xl p-5">
                <Card className='transition-all duration-300 border-2 border-transparent hover:border-red-600 hover:shadow-lg hover:shadow-red-600'>
                    <CardMedia
                    component="img"
                    height="140"
                    image='/project.png'
                    />
                    <CardContent />
                </Card>
                </div>
                </div>
            </div>
        </>
    )
}