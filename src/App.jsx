import Notification from './components/Notification';

function App() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] p-4 md:p-10 font-sans">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight italic">USER_NOTIFICATIONS</h1>
        <p className="text-slate-500 font-medium mt-2 italic">Real-time updates from your favorite store.</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
        
        {/* LEFT COLUMN: SHOPPING & LOGISTICS */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-4 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Orders & Delivery
          </h3>
          <Notification type="success" title="Delivery Success" message="Package #8210 was delivered to your doorstep." />
          <Notification type="loading" title="Track Order" message="Courier is 5 mins away from your location." />
          <Notification type="info" title="Wishlist Update" message="A dress in your wishlist is back in stock!" />
          <Notification type="urgent" title="Stock Alert" message="Only 2 items left for 'Wireless Earbuds' in your cart." />
          <Notification type="success" title="Feedback Received" message="Thank you for rating our service 5 stars!" />
          <Notification type="warning" title="Return Deadline" message="Return window for Order #772 expires tomorrow." />
          <Notification type="info" title="New Collection" message="Summer 2024 trends are now live. Explore now!" />
          <Notification type="loading" title="Verifying OTP" message="Processing your transaction for ₹1,299..." />
        </section>

        {/* RIGHT COLUMN: ACCOUNT, DEALS & SECURITY */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-4 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> Privacy & Rewards
          </h3>
          <Notification type="urgent" title="Limited Offer" message="Use code 'FIRST50' to get 50% discount today." />
          <Notification type="error" title="Login Attempt" message="Unusual login detected from a new device (MacBook Pro)." />
          <Notification type="success" title="Cashback Credited" message="₹150 cashback added to your wallet for the last order." />
          <Notification type="info" title="Points Expiring" message="Your 500 loyalty points will expire on 31st December." />
          <Notification type="warning" title="Password Reset" message="You haven't changed your password in 6 months." />
          <Notification type="success" title="Referral Bonus" message="Your friend Rahul joined! You earned ₹100 credit." />
          <Notification type="error" title="Subscription Ended" message="Your Premium membership has expired. Renew to enjoy free shipping." />
          <Notification type="urgent" title="System Alert" message="App maintenance scheduled tonight from 12 AM to 2 AM." />
        </section>

      </div>
    </div>
  );
}

export default App;
