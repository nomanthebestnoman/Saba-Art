import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, MessageCircle, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (artworkId: string, quantity: number) => void;
  onRemoveItem: (artworkId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => {
    const framePrice = item.frameOption === 'Frameless Stretched Canvas' ? 0 : 3500;
    return sum + (item.artwork.pricePKR + framePrice) * item.quantity;
  }, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsList = '';
    cart.forEach((item, index) => {
      const framePrice = item.frameOption === 'Frameless Stretched Canvas' ? 0 : 3500;
      const unitPrice = item.artwork.pricePKR + framePrice;
      itemsList += `${index + 1}. *${item.artwork.title}* (${item.artwork.urduTitle})\n   • Framing: ${item.frameOption}\n   • Qty: ${item.quantity}\n   • Unit Price: PKR ${unitPrice.toLocaleString()}\n   • Item Total: PKR ${(unitPrice * item.quantity).toLocaleString()}\n\n`;
    });

    const message = `*✨ New Order Request - Saba Art ✨*\n\n` +
      `👤 *Customer Name:* ${customerName || 'Customer'}\n` +
      `📞 *Phone / WhatsApp:* ${customerPhone || 'As per chat'}\n` +
      `📍 *City:* ${customerCity || 'Pakistan'}\n` +
      `🏠 *Delivery Address:* ${customerAddress || 'Please share address'}\n\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `*ORDERED ARTWORKS:*\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      itemsList +
      `━━━━━━━━━━━━━━━━━━\n` +
      `💰 *Grand Total:* PKR ${subtotal.toLocaleString()}\n` +
      `🚚 *Shipping:* FREE Express Delivery across Pakistan\n` +
      `💳 *Payment Method:* Cash on Delivery / Bank Transfer\n\n` +
      `Please confirm the order and dispatch timeline. Thank you!`;

    const url = `https://wa.me/923000000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    setOrderCompleted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#12141c] border-l border-zinc-800 shadow-2xl flex flex-col h-full animate-slideInRight">
        
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-[#161822]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#faee78]" />
            <h3 className="font-serif text-white font-bold text-lg">Your Gallery Bag</h3>
            <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full font-semibold">
              {cart.reduce((s, i) => s + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderCompleted ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">Order Initiated!</h4>
              <p className="font-arabic text-lg text-[#faee78] font-bold">
                آپ کا آرڈر واٹس ایپ پر موصول ہو چکا ہے!
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                Saba Art will review your pieces, provide confirmation, and send package tracking once dispatched.
              </p>
              <button
                onClick={() => {
                  onClearCart();
                  setOrderCompleted(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider"
              >
                Continue Exploring
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-20 px-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-zinc-800/60 text-zinc-500 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-zinc-300 font-semibold text-base">Your bag is currently empty</h4>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                Explore our collection of original handmade Islamic calligraphy and landscapes to curate your sanctuary.
              </p>
            </div>
          ) : !isCheckingOut ? (
            /* Items List */
            <div className="space-y-3">
              {cart.map((item) => {
                const framePrice = item.frameOption === 'Frameless Stretched Canvas' ? 0 : 3500;
                const unitPrice = item.artwork.pricePKR + framePrice;

                return (
                  <div
                    key={item.artwork.id}
                    className="p-3.5 rounded-2xl bg-[#171924] border border-zinc-800/80 flex gap-3.5 items-center"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-[#0b0c10] p-1 flex-shrink-0 flex items-center justify-center overflow-hidden border border-zinc-800">
                      <img
                        src={item.artwork.image}
                        alt={item.artwork.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif text-white font-bold text-xs truncate">
                        {item.artwork.title}
                      </h5>
                      <p className="font-arabic text-[#d4af37] text-[11px] font-semibold truncate">
                        {item.artwork.urduTitle}
                      </p>
                      <p className="text-[10px] text-zinc-400 mt-0.5 truncate">
                        Frame: {item.frameOption}
                      </p>
                      <p className="text-xs font-bold text-[#faee78] mt-1">
                        PKR {unitPrice.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity & Delete */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(item.artwork.id)}
                        className="text-zinc-500 hover:text-rose-400 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-1.5 bg-[#0b0c10] rounded-lg px-2 py-0.5 border border-zinc-800">
                        <button
                          onClick={() => onUpdateQuantity(item.artwork.id, item.quantity - 1)}
                          className="text-zinc-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.artwork.id, item.quantity + 1)}
                          className="text-zinc-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Checkout Form */
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <h4 className="font-serif text-sm font-bold text-white">Delivery & Contact Details</h4>
                <button
                  onClick={() => setIsCheckingOut(false)}
                  className="text-xs text-[#d4af37] hover:underline"
                >
                  Edit Cart
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Full Name:
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g., Muhammad Noman"
                  className="w-full bg-[#171924] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  WhatsApp / Phone Number:
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="0300-1234567"
                  className="w-full bg-[#171924] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  City:
                </label>
                <input
                  type="text"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  placeholder="Lahore / Karachi / Islamabad / etc."
                  className="w-full bg-[#171924] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Complete Delivery Address:
                </label>
                <textarea
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="House #, Street #, Sector / Area..."
                  className="w-full bg-[#171924] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  Payment via <strong>Cash on Delivery (COD)</strong> or <strong>Direct Bank Transfer / JazzCash / Nayapay</strong> upon order confirmation on WhatsApp.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Subtotal & Actions */}
        {!orderCompleted && cart.length > 0 && (
          <div className="p-5 border-t border-zinc-800 bg-[#161822] space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-zinc-400">Subtotal</span>
              <span className="font-serif text-xl font-bold text-[#faee78]">
                PKR {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs text-zinc-400 border-b border-zinc-800/80 pb-2">
              <span>Delivery Charges</span>
              <span className="text-emerald-400 font-semibold">FREE (All Pakistan)</span>
            </div>

            {!isCheckingOut ? (
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#faee78] to-[#aa771c] text-black font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Complete Order on WhatsApp</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
