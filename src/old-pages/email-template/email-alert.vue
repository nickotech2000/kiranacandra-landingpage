<template>
    <div style="margin-top: 50px;">
        <table cellpadding="0" cellspacing="0" style="font-family: Nunito, sans-serif; font-size: 15px; font-weight: 400; max-width: 600px; border: none; margin: 0 auto; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
            <thead>
                <tr style="background-color: #4f46e5; padding: 3px 0; line-height: 68px; text-align: center; color: #fff; font-size: 24px; font-weight: 700; letter-spacing: 1px; padding: 25px; display: flex; justify-content: center;">
                    <th scope="col"><img src="../../assets/images/logo-light.png" alt=""></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td style="padding: 24px 24px;">
                        <div style="padding: 8px; color: #dc2626; background-color: rgba(219, 38, 38, 0.05); border: 1px solid rgba(219, 38, 38, 0.05); border-radius: 6px; text-align: center; font-size: 16px; font-weight: 600;">
                            Warning: You're approaching your limit. Please upgrade.
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 24px 15px; color: #8492a6;">
                        <div>
                            You have <span style="color: #fff; background-color: #dc2626; padding: 4px 8px; border-radius: 6px;">1 free report</span> remaining.
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 24px 15px; color: #8492a6;">
                        Add your credit card / debit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.
                    </td>
                </tr>

                <tr>
                    <td style="padding: 15px 24px;">
                        <a href="" style="padding: 8px 20px; outline: none; text-decoration: none; font-size: 16px; letter-spacing: 0.5px; transition: all 0.3s; font-weight: 600; border-radius: 6px; background-color: #4f46e5; border: 1px solid #4f46e5; color: #ffffff;">Upgrade Account</a>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 15px 24px 0; color: #8492a6;">
                        Thanks for choosing Techwind Template.
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
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().getFullYear());
</script>