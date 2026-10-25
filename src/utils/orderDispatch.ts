export interface OrderData {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  customerCity: string;
  customerAddress: string;
  items: Array<{
    title: string;
    frame: string;
    quantity: number;
    price: number;
  }>;
  totalPKR: number;
  orderType?: 'Standard Purchase' | 'Custom Commission';
  notes?: string;
}

export const SABA_EMAIL = 'sabaart112@gmail.com';
export const SABA_WHATSAPP = '923000000000';

export async function dispatchOrder(order: OrderData): Promise<{ success: boolean; message: string }> {
  // 1. Build text receipt
  let itemsBreakdown = '';
  order.items.forEach((item, index) => {
    itemsBreakdown += `${index + 1}. ${item.title} (Frame: ${item.frame}) x${item.quantity} = PKR ${(item.price * item.quantity).toLocaleString()}\n`;
  });

  const payload = {
    _subject: `🎨 New Order from ${order.customerName || 'Customer'} - Saba Art`,
    _template: 'table',
    _captcha: 'false',
    _replyto: order.customerEmail || SABA_EMAIL,
    'Customer Name': order.customerName,
    'Phone / WhatsApp': order.customerPhone,
    'Email Address': order.customerEmail || 'Not specified',
    'Delivery City': order.customerCity,
    'Delivery Address': order.customerAddress,
    'Order Items': itemsBreakdown,
    'Grand Total (PKR)': `PKR ${order.totalPKR.toLocaleString()}`,
    'Payment Method': 'Cash on Delivery / Direct Bank Transfer',
    'Special Notes': order.notes || 'None',
    'Target Dispatch Inbox': SABA_EMAIL
  };

  // 2. Dispatch email to sabaart112@gmail.com via formsubmit API
  try {
    await fetch(`https://formsubmit.co/ajax/${SABA_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.warn('Background email dispatch notice:', error);
  }

  // 3. Format WhatsApp Message
  const waMessage = `*✨ New Order Request - Saba Art ✨*\n\n` +
    `👤 *Customer Name:* ${order.customerName || 'Customer'}\n` +
    `📞 *Phone / WhatsApp:* ${order.customerPhone || 'As per chat'}\n` +
    `📍 *City:* ${order.customerCity || 'Pakistan'}\n` +
    `🏠 *Delivery Address:* ${order.customerAddress || 'Please share address'}\n` +
    `📧 *Notification Email Sent To:* ${SABA_EMAIL}\n\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `*ORDERED ARTWORKS:*\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    itemsBreakdown +
    `━━━━━━━━━━━━━━━━━━\n` +
    `💰 *Grand Total:* PKR ${order.totalPKR.toLocaleString()}\n` +
    `🚚 *Shipping:* FREE Express Delivery across Pakistan\n` +
    `💳 *Payment Method:* Cash on Delivery / Bank Transfer\n\n` +
    `Please confirm the order dispatch timeline. Thank you!`;

  const waUrl = `https://wa.me/${SABA_WHATSAPP}?text=${encodeURIComponent(waMessage)}`;
  window.open(waUrl, '_blank');

  return { success: true, message: 'Order sent to email and WhatsApp!' };
}
