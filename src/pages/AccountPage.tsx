import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
});

const passwordFormSchema = z.object({
  currentPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
  newPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;

const AccountPage = () => {
  const [isSaving, setIsSaving] = useState(false);

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "Anna Johnson",
      email: "anna@example.com",
      phone: "+1 (555) 123-4567",
    },
  });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onProfileSubmit(data: ProfileFormValues) {
    setIsSaving(true);
    // In a real application, you would send this data to your backend
    console.log(data);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  }

  function onPasswordSubmit(data: PasswordFormValues) {
    setIsSaving(true);
    // In a real application, you would send this data to your backend
    console.log(data);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  }

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.pravatar.cc/150?img=36" alt="Profile picture" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h2 className="text-xl font-medium">Anna Johnson</h2>
                    <p className="text-sm text-muted-foreground">Customer since May 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-3/4">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your account details and personal information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...profileForm}>
                      <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                        <FormField
                          control={profileForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={profileForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input {...field} type="email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={profileForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input {...field} type="tel" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" disabled={isSaving}>
                          {isSaving ? "Saving..." : "Save Changes"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                      Update your password to maintain account security.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...passwordForm}>
                      <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                        <FormField
                          control={passwordForm.control}
                          name="currentPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Password</FormLabel>
                              <FormControl>
                                <Input {...field} type="password" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={passwordForm.control}
                          name="newPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>New Password</FormLabel>
                              <FormControl>
                                <Input {...field} type="password" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={passwordForm.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Confirm New Password</FormLabel>
                              <FormControl>
                                <Input {...field} type="password" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" disabled={isSaving}>
                          {isSaving ? "Updating..." : "Update Password"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>
                      View details of your previous orders.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-md overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium">Order #</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Total</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="px-4 py-4 text-sm">#23456</td>
                            <td className="px-4 py-4 text-sm">Apr 19, 2025</td>
                            <td className="px-4 py-4 text-sm">
                              <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Delivered</span>
                            </td>
                            <td className="px-4 py-4 text-sm">$142.50</td>
                            <td className="px-4 py-4 text-sm">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 text-sm">#23421</td>
                            <td className="px-4 py-4 text-sm">Mar 22, 2025</td>
                            <td className="px-4 py-4 text-sm">
                              <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Delivered</span>
                            </td>
                            <td className="px-4 py-4 text-sm">$86.00</td>
                            <td className="px-4 py-4 text-sm">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 text-sm">#23333</td>
                            <td className="px-4 py-4 text-sm">Jan 05, 2025</td>
                            <td className="px-4 py-4 text-sm">
                              <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Delivered</span>
                            </td>
                            <td className="px-4 py-4 text-sm">$214.75</td>
                            <td className="px-4 py-4 text-sm">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="addresses">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Addresses</CardTitle>
                    <CardDescription>
                      Manage your shipping addresses for faster checkout.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base font-medium">Home Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Anna Johnson</p>
                          <p className="text-sm">123 Main Street</p>
                          <p className="text-sm">Apt 4B</p>
                          <p className="text-sm">New York, NY 10001</p>
                          <p className="text-sm mb-4">United States</p>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-red-500">Remove</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base font-medium">Work Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Anna Johnson</p>
                          <p className="text-sm">456 Office Plaza</p>
                          <p className="text-sm">Suite 200</p>
                          <p className="text-sm">New York, NY 10022</p>
                          <p className="text-sm mb-4">United States</p>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-red-500">Remove</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Button className="col-span-2 max-w-xs" variant="outline">
                        + Add New Address
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;