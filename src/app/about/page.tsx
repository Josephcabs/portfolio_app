"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center text-[#666]">
        <h1 className="flex tems-center justify-center text-4xl font-bold py-12 text-4xl bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow">
          About Me
        </h1>
        <div className="flex flex-col items-center justify-center text-[#666]">
          <div className="flex flex-col items-center justify-center pb-5 w-[90%] sm:w-[80%] md:w-[60%] ">
            <Card
              sx={{ color: "#666", backgroundColor: "#171717" }}
              className="transition-all duration-300 border-2 border-transparent hover:border-red-600 hover:shadow-lg hover:shadow-red-600"
            >
              <CardMedia
                sx={{ height: 600 }}
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUREBMVFRUVFhgXFxcWFRUVFRcYGRgYFxgXFxcYHSggGBolGxoWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS8tLSstLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAK0BIwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwECAwj/xAA+EAABAwIEAwYDBgUEAQUAAAABAAIRAwQFEiExBkFREyJhcYGRBzKhFEJSscHRI2Jy8PEVgpLhUwgkMzRD/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EACoRAAMAAgEEAgEDBAMAAAAAAAABAgMRIQQSMUEiURMFMrFhcZHwFEKh/9oADAMBAAIRAxEAPwDS6IiAIiIAiLhAcoiIAiIgCIiAIiIAiIgCIuEByiLPw3D+0PekAjQiIEzE+sLqWwYBH9+eo+iKyswxgblquGYE5XAhwIA7sg7ch+6BlN8DKHHaSYGWOQBHRS7DhWkUrdYLVgvptLmiS7KCconmemoUUOvJRaaOhERcAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB3o0i9wa3c6Kwm2dRo5HVBO5ymYA2GsRr+ah8JcwVJfHgDOp5RC97yq+pULSCTJAA3PMaKcg6C5MjNqBqQPDX0XmbyodZPQeA6I22qTAY6TsMpk/uvT7BWIzdm6P6SB+SOjnaz2scVrUSOzeQJ1AJg8tuo/ZZdS6ZcD+K0F50adegiPZQ5001B1kf35LqHaruwdLig6m4tcCDodehEg+oIXms+7h9MVCTnDspEaRGhnr/ANLAUGdCIi4AiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIpDAMJqXtzTtqXzVHRPJoGrnHyEoDHsLGrcVBSoU31KjtmsaXOPoOXirhbfCXGXszdgxv8AK+qwO9gTC2NY8PUsOpBlv3ZjM/77z4u/TZeguqrDLXO9yqnk+kaZ6fuW9mjsdwG7sanZ3dF9Jx2zDuu8WuGjvQqOX0mbd99TNCq1tem7UsqxpH4XbsPiFpnj7g1+H1XOY13Yk6ZtXU52BI+ZvR3upTaZXeJyVJEVu4U4SdW/jV2nswJy6tnpmI2HhuV2qS8ncOC81dsEFgNQCqdfumO7m15f0+aluD2Oq4g0ASSTHnIC2PixcyzFuRRt6ThIpUmBrn6iDUA1jnqVQK1GpZVG16UszHKHhu0ETk6nwUPyp/E2v9OyY4/K2np+jY+N2pq3QIpsa5oawtGwO+bbQTKjuJGVH9yoW7E9zQfQKo2mIYnWt69YGWhwDnkAEzJj6A9NVg2+PXrixrvu/LIhuu5nmudj+yCzStcETi9ICpI2Kwi5TF8wlrsxE7zyJ/ZRotiAXHSACPGVbL40Y8k87R1Y8ZHhxMECI2zcp8Fir1raBvjqR6mJXkpMrCIi4AiIgCIiAIiIAiIgCLhEByiIgCIiAIiIAiIgCIiALY3wWth9oq13CcrMjf6namPQBa5W2ODbV1lZgvJY97u0MfMNAAPaFC3wXYY7qLditVzxLgWwTE+HmoyjcktOwjqVVamPOq1Hmo5uUz81QioI0BgaegCi6uJFnyEu8TIhQlI2v4cG1cHxwUx3YztdEkaZTvI0nbZenF99SuqIDwHDKQ8RAIO41WscLx1wmQdd9JCnH3VQ0AARlJMTG8eBK52M7qG9lIw3AQLuo10uZRdofxDds+hCuX2u7uWllFuWjREkwQxnnHzOPurdwtgVAYf9sqgklxNSNJa0log+2vRR2JcYOrM+wYdRbRY85JGrjm0MRsep1UL/AHbpmzpa7cXbhnlPmn6/1FIZdAvl5c8/zHflJA/KV1x68fWa3NswANHIR0CzMewA2RaAS5pHzkQHEfNH8s7dYUTXqDLqqG2qPWlzeHn2jM4ex2ixrxc1SGmXFgGrjsAvE45NN5pMDqTnHLma0VW+Pd5KKxHDmW4oVXy7tgSWloloBEZdTPrC4xe4oOaH0c4j8TWNM9IZpHjPJa1Oz5i8jltfR53FYuMOEA/3qvatQ7Si4MbqBOm5jYf31WC+6aRzJMaK1cIWeYyZg+seKk/jyyuF+R6KBMot3X3w4s7pubWlUI0qUgId4vp/K7zGUqiY/wDDTELaXUw25pjWaPzgfzUj3v8AjmXJzRXhlF4qjyUxEI5HkitKwiIgCIiAIiIAiIgCIiAIiIAi4XKAIiIAiIgC70KL6jgym1z3O0DWgucfIDUqXwHha6vHDIwspk61XghgHMj8R8AtxYVc4Rg1EtZTqGpEGpDS956l06a8tgoVaXBZOOmt64Nf8LcF1adUVb6maYZBax8STuHOAOgHQqz17qm5jnOcRBhp6QOSrN/xU+rndJknTWVi1L4m3ynQ5p8Toovb8mzG5xrg6C5tg5+ZhNTNM5oA13y7OBXlXrNk6DXzWBTqsmfvcp0XV9Vo8VxTph5toze0e35QNV60bS6q7gUmzGaSCTpsDusO3ruBECddlZME4ipOumU69uapGWnSaDDWknc9dSPZSe0uERThvlm+8Ctrc2VOjS1pdnk8Tp3p8ZlULGrTD8HOjajnmXSA3NlP3BUdowRoSBPismx4+oWz/s/ZBtQEhzWa5nk6AEdBElVD4r4x27qdPQ1HauA1DBsG+czqoN719nYmsdNPfa/6kXxjxlVv6bGCnTp0qZ0ygn0zE66dIVOqX4H3ST4nT2XtiFXK0UxqQIXNlhgBmvp8pDeesnveMRp4qSleWKzVrtjhGZY2NS/phz6kQ/KJ0AECCPDWFD4jhz6L3MJDspiR9DC2lwvZMum9m0BrAI1hR2P8O9m51OkW1c2adDmkiJzdRA9lFZNPR2+nVLjya3tW98A8lt74aZB84ke49VVMI4YzV2HQBgEgyczuZd/fJbDwWyp03fJknXu/L78vJV58ia0izBgcJui40n0o0B9FXb3iKiysGnRrnZQfwRoTI5KWq20tiSAei16+3y3GWrs3bxCxwmW4oh75PTj7gy2vor2dVouZh4yOZTqjkZAIDh+LmtU41gVzZuy3FPLOzgQ5jvJw0nw3X0BRxCiGjLEhdK1vb3dOpRrtDmvEwRseRC1xna4ZlydL7Wz5wRWXjLhY2T8zCXUnGBOrmH8LjzHQqtLWmmtoxVLl6YREXSIREQBERAEREAREQBERAEREAWxfhfwvSrU33ldodkfkpsOokCS4jn0HqtdL6A4KtGWdpSpuiQyT/W7VxPqqstakuwR3USjXnLLacgaa7D0C63OK1XgQ2kA3SOzaQfMEFdrnHxBZDR5blYQrNcJmFkW14PSUp/ukrPE3DTKs16DGUXkahjQKZMb5dh4wtcXl1cU3FlR0EabDUdVvBze6QY2JHiteY/hguX5WgZwSBPMdFox39lOTFtfE1+ahOvPquC8856/4WXfYfUo1Mr2kQdRzgdOquWLXFtXYBUYAajGuaQA3KQMvdjYd1XOtcmOMTrabKdb3ENgGCTy3K9K906lBGjxrI0PuFz2YoGXQQPl6nzXhYWdW8rimzdxkmNGt5uMcgpNr0R5XHssfw/ZUrXTrl8ltFjnac3nQDxMZl3xLCbxxNdwlz9YJ+WTMHx8Fsbh3BqNvSa0ANaBA6u6ud4lRXHmMU6VGGRpsB1WN5d3qT0JwpR8ma0wyt2F2w3A7pcM/Mgc46LZ1TBsPrw9mg/q19VpytUdUdJ1J5La1hVputm93I8ASDo4GArM20kV9Lqm0WOkaNtTy0GDblqf3WFWvnUaZqOYJJjUwZOnuoCzr5XfO4A+ZHrC4xq7bWcGB8hv6bwekws6k3PSJjBaevdnVW63eGiHN9hqqpgDHNEhwPRTdeu4ffPsFGk2RvlklVuHAdw6fmqfxDVDgDs8bO6joVJ3GLtbp2hnwAKo3Fte5ae0LgKZmCRqeogKUQ2yv9i2zm1xo5iDuDtOinLTGSDBI1WsrO6qPfALQeplW2xwy4c0OgEdQVbeNI5hzu/RN8RPbcWz2u1lv15H3haiC2lcU3NYWvBBjYrW+JWD6D8rhoRLTyLVPA/RR10cqkYqIi0HnhERAEREAREQBERAEREBwuURATPB1k2vfUWP+XNmd4huse8LbON3D6T3Fslk7jYey1HwlULb63gxNRrT/AEu0P0W9r69t2U8oE8tVnzeUeh0fh6RSKt8SJWLSxcjQmPVe10KHbwO61/IHQO5e6kLPhKi581HE6aCVDhGt3Xo9sNxkvYWE+XVVnGL829w14IBk/wB/VXGlgNFkuaDpylRmN8O29Z01CYjQa5gf2SKWzlp1PHkguJT9poB7GyW6k7nx9FG41/8ASt6oEdn3D172oB9QfdW12C/ZGNG7HDuu5HwMqE4lDfsVRreUH1DgrZooy4/i696KFXruedfQLZvA+F/ZaMluavWgkfgb91s9eZ81V+GMKY2qDWEv0OU7M8+rvyWw7RuUucDAG/io5r40iPSYf+9GViN12DC57pO61LxJihr1C47T3R+qnuLsazSM0jbzPQKjVHyZK5gx65I9Xm38Ed7R8VGno4fmrRid9UbVaWnSo0A9JGg/ZVJTbK3aNBnl/ke6upezPivSaJzC8TLdSRI0jqsztQXDy+pOqhcLpUw/O/YamdZI/dWXDcOp1WZs8aExOoJ10ncKitI9DFTa2yVsbiBoYWHiWOsY7I9zifPRYlSyqNlrajXeUyPPooS9pNa7vOz1OjRIHmUUr2MmR+iarYw1kkCBCp+MYvVunCmJLZ0HUqao4ex8mo9zz+Fo7o8zzUfaOZTcTlg7Ka0uSjK6vh8Ii7q1fQcCYMdFfOEsbyNBB0O4VExW5zEwu+C3xYcvXb9lK5dSVYsix3r0bwqWlK8owCAR8p8+Sr3F3DVKpaMpgd4Amm7o7ofNRGC48aWsmFZn4rTuKRpg97cHSQVklOWb2lS16NHPYWktcIIMEdCF1U5xbaZK3aRpUmdPvDf3UGt6e0ePc9tNBERdIhERAEREAREQBERAEREBnYGSLmkRuHg+2quV5ijuv7qrcKMBumTyDj7NKnMRsM5lug6qukm+TZgqph6InFLx5Iyul06Rutm8O4qK1Bj9ngQ4dCFr+hZMp946u6n9F3wnFjb1yJ7j9/A9VG52tIsw25rdezZn+ogHfffos+2FOo4TqCJ81Tars3eadV2s69Zju6dln7T0KnjgsWPNbkLY7h26tKpWGvmuGO5O89hP7K2XVU1ma6Ejblm5+6rmH2L23Ic/Z2gPKSDueR0U1wihrwmSlTDhUqB1MAEAzy08Vj8SVhSoCS4GNTyKysVxFts2GQ4841nmVW8W7S/YMzi1jXCQNXOJ2aFBedvwWdre1C5KRiFz2jyRsNAPDr6rGW2MO4NwqjRpvu6V05zpzB3aMa0cocAAVWcc4YoPc51lmpidGPcXg/7jqD7rSssLg8//AIOettLeimrPw75XDx/RYdak5ji14LXNMEHkpvBMCr1qdRzKb5ABZLSGO6jMR0OnIqdNJcmWE+7QpvAYQRJ69FJ4ZexpOWPqvW04Pvq3dAotcZ7rq1MO01MtBJ0HgszDOC69R7ALi2JeHZYe5whnzbN0hUVkj7Nc9yOad08OI+VpGrjuR4Be9K5AaWsGRp3I+Z3qpGx4UdWqBjby3e7XugvG2+pbr6KUrfDm7G1Sk7wlzf0hVX1GKHqnr+5b368lVfR7pcHGADu79tVTLy6M6c5WysX4SxGnSy/Z3PHPI4On0bqtVXlNzHFrwQ4bhwII8CDstGK4vw9mfPX0eLjK4BRFcZCZwvEZ7r9/z/7U1bXzaTw6TB16+ipgMa9FsDhPhO4vaIrGjUyT88ZWwNCRO456Kq5Xk14Mj8Gfc4K7ELNzmNAcNWTp3uk+UrWt1bPpPLKjS1w3B3/7819CutmUrXLRYcoMSAcugjU+61l8SbZrm0qjR3myHa65Tp+ce6jivZZ1OLfy+ihIiK8wBERAEREAREQBERAcLlEQEhw/WDbmmTsTlPqIV2raNJWumPIII0III8xqrwL4VKBftIB8lxrZpwXpNEbWuJJWLWLS0g6ErtQD3yWiVn2tm8fMyR5FR0d33HGDYpDcjjMaKwWl1OqqrqZpvksHiNP1UhbueNRt5g/kVysW1tF+HqHL7WXO0rA7/wCFmWtV9GoXNIiO8CAWuHiDuqtaYiBupv7S2o0NJ06jmOioSaNtJUuDtXwW0xAnI421UGYEmi/zn5Nemngrdg9DDcLY0mKjiRmqEte4HYkM+63y1VEu3kaAho5AaKPr1WgSXAlSWvJnuHrt29H0KytTqMB7rmPAg6FpB281rP4mYJStslag0MDyWuaNBMTI6LrwtxK5lnRpZmEurOEOBc4U25XEgbRJOpK9fiPxNa1aTaDTmcHZt4I0I9zJ0XcnMsp6OrxZ1p8P+Ch2FpQuKwrXDR/7djnn+cAQ1pHOHFp9PFc3GIA2FxWzvz1agpwXS0NbVmGDlLWiVH4VWfcXVVlGnmbStaxIAkFxAguk9YC9cPwy+rW1OgKWQNeTmcIEZCMzt5JJPLdVPhLuf1/gvzZIrLTlGXgtVr7o5Kff7arV7Sf/AMwx0tjz1XnwjTqVLh1FpGtCuBJgAkDnynQeqn8N4RuAGuz0mPD3OGrnGHMDXAgDnH1KmbDgM/w/4jSeyex+VpAc0vDgQTs4GBqo31eBbSrn/JBUkuTFwU9nXtKdzaimR8lRrvncNcz439+a2VScdR0VQw7gqrSex9S4NQUmkUwZAZy016aK2U2uBmW/VeD+p5VeSXL3/Hn+pXbT8GU5fN/xisDRxaqeVZrKo9RlI92/VfQ9K/Y55p/eb10B0B08wdOsHotO/wDqDtSK9rWynKWPYXR3ZDg4Ceup08CtP6Xuc/8AdGbIuDUqIi+kKCY4SsW3F3Tpv23120iJ8JW6Rd3lpTfbiqzs2iCJBhrjEs91oWxvH0HipTMOE77EHcFbApvNRueq/I0tBiZcZE6e+6z5m09nu/pSjJDh+Vzyi64DiDRR7GmWN7f56jiS5jSJyxsOnmVQOPaPZ0oY8PGYNJHjqD9FmX2KZwGN0a3SdAT5rHeA5pY8S1wIKqWTTR6WXoVkikvL/k18i9Lqlke5m+VxHpyXmtp8i009MIiIcCIiAIiIAiIgCIiAQvo224Xpw0NsaBa0AQKjp0HPvCZ/NaK4Qwo3d9QoTAdUbmMTDQczjHkFvbjLjPDbBpY5lKtcf+OmMwb/AFO2b5b+CvxNLyirJvfDPa7w1luwA2dkxp5uqZevTfZRFKyt6j4b9jDulOnUrkeQ2K1ri/xDva0iiKdu3URRY0H/AJET7QqtVuHudnc9xdM5iST1mVcrifXJHVv2fRr+HTUaAG1uncpULdvjuC5VLiDAX0QRoQdhUuiTz5CkB1Ur8Pr5zsEo5HmpWD6kgvOYAVXDnv3Y0VJ4w4muKVUBzCAWxHeEEaaTvMyrcf7W6fBW992kRN7TLTDhlPnofIrGN44CJ9VHvxgPJNTNr5ELzv7qk6k0Ui7MD3pbAjcQZ3WHLixp7h8HoR1F65JB2Juyy53mSo+ti0fKJPU7ewUU5xO5JXCqSRyslMzamK1i4OzEQIAb3QPKF7Wt9Vc7JSaXVKhDG6y4ucYABPMnRRi3P8EOCwWf6jXbq6Rb9WgEtfUjkSQQCeWo3Vea1EumIyUnwyZwrhsWNrRs6bmipUIfcO+895ggF06NGwG5hWbhvDy0Ek90l3rBhunIDVeVXhyqLttYuBbmBDdYbA8fJWG0IgxAAJAA8N/rK+fqnVapmmqUxqTuKDNyBPkF1tqIbMbSfqZKxsTxShRB7R4A8/1XS2qvqNmHNadhEEjkY3HrqqMmSYa48fRWorW2e9+HFpAIbPVYtG5L4ZSEgaFx208F5XtjOpY+p4doRH+0RK635qtofw2hjQPIno0c5JgLJzVcF0pa0dL2sx1xTZT1c3KHOHi5rsvo1r3f5WVxXh9O4sq9KqAWmk/cTBDSQR0IIWFwphhaTVfqRLZ01qH/AORwPQQGDwYeq9uN8Up2lhXrVdRkLQ38TiCAPdenGNrtmVyV5db0j5RbsuVw0aLlfSGQKzYZeF9Bs/c7h8hqPofoqysmyujTPUHcfqq8kdy0a+i6j8GTu9ey0tcs1tZoY4O6aa7Ec1Xv9WpgaE+xUfe4m+pIGjVROFnuZP1THE/HlmNdVM73OHMkryRFrR8zT29sIiIcCIiAIiIAiIgCIiAzrK6fSh1JzmOAJzNJaddNCPBYxM76rkmAPELor6rhIgkdlwgK5UDptjgLDrt2Fsq29Jz+/UhwcBEOI7o3JlQHHmKVKtu1tYTUbU3I7w0Mid1fvglXzYW8ua0ijVqNAI3Dg1+/mV1404bo4jamuA2g9jnGWMnMGscYIkeGq2TlbxuWvRQ5SvZocrlhhcTouxWLXJoPNF3qDX0C6KLOhfUnw1Ip4PZlxAHYgk+cn9V8tr6JwLCzXwS0d2jm5LdkNHynSfDVYeueoWvssxSqrTLheY1SaJBDteSqWL8VOY/saWklxnmQ7Uesn6Ko067ocJMDqZ1H+F6vthVfT1guY3XfZoXj/j3W7Z6iwTBZMKsWurtqOBuKjRmMyWM8mjc6GArF/rZpGbp7aeY92m1jnmByLgNT1josrB7WnbMbSY3cZi7mSV2xm9bbDtBTaXP0nQHSIkxJTFUv4tb/AN/8M+TIrrWjNsLtlZgqUzLT4QfY7Lpe2YfBLiI9o5x0cdp5DZVa5xGpkc7NE6kM7g926z4yrSLZtWkwPLiC1pIDiM2g3I1KlWFxpldx2ckJieL5O6HNZTbsxhl7wOTiNGN8BqfBab+LPE9a7qU6Jd/DZLso0EnQT1gK98Y3Ipue2kwMA0gddpWlcfrl9czyAC3dFj3fexmSmFr2RyLhcr1TGEREAREQBERAERcIDlERAf/Z"
                title="Boxing"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  component="p"
                  className="text-center text-1xl md:font-bold md:text-2xl"
                >
                  I am a boxer in training, I am resilient and I am hard working
                  when achieving personal goals. This lead me to improve my
                  skills and to become a better version of myself. I am
                  passionate about my work and I am always looking for new
                  challenges.
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button
                  href="https://www.youtube.com/watch?v=gaOTSMB6hLQ&pp=ygUebWFydmluIGhhZ2xlciB2cyB0aG9tYXMgaGVhcm5z"
                  target="_blank"
                  size="small"
                  className="hover:bg-red-600 antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:text-black
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100"
                  sx={{ fontSize: "1rem", color: "#666" }}
                >
                  View My Favorite Fight
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      {isVisible && (
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className="fixed bottom-0 right-0 text-1xl text-[#666] w-auto transition-all duration-500 hover:text-black hover:bg-red-600 font-bold hover:bg-opacity-80 
    hover:text-opacity-100 
    antialiased 
    overflow-hidden 
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    "
        >
          Go To Top
        </button>
      )}
    </>
  );
}
