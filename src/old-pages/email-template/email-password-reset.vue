<template>
    <!-- Hero Start -->
    <div style="margin-top: 50px;">
            <table cellpadding="0" cellspacing="0" style="font-family: Nunito, sans-serif; font-size: 15px; font-weight: 400; max-width: 600px; border: none; margin: 0 auto; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
                <thead>
                    <tr style="background-color: #4f46e5; padding: 3px 0; line-height: 68px; text-align: center; color: #fff; font-size: 24px; font-weight: 700; letter-spacing: 1px; padding: 25px; display: flex; justify-content: center;">
                        <th scope="col"><img src="../../assets/images/logo-light.png" alt=""></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style="padding: 48px 24px 0; color: #161c2d; font-size: 18px; font-weight: 600;">
                            Hello, Harry
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px 24px 15px; color: #8492a6;">
                            To reset your password, please click the button below :
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 15px 24px;">
                            <a href="" style="padding: 8px 20px; outline: none; text-decoration: none; font-size: 16px; letter-spacing: 0.5px; transition: all 0.3s; font-weight: 600; border-radius: 6px; background-color: #4f46e5; border: 1px solid #4f46e5; color: #ffffff;">Reset Password</a>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 15px 24px 0; color: #8492a6;">
                            This link will be active for 45 second from the time this email was sent. If you did not request to reset your password, please ignore this email and your account will not be affected.
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 15px 24px 15px; color: #8492a6;">
                            Techwind <br> Support Team
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 16px 8px; color: #8492a6; background-color: #f8f9fc; text-align: center;">
                            © {{date}} Techwind.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Hero End -->
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().getFullYear());
</script>