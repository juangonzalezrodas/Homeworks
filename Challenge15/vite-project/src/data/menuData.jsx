import { TreeNode, NaryTree } from '../data-structures/NaryTree';
import Profile from '../components/pages/Profile';
import Messages from '../components/pages/Messages';
import Settings from '../components/pages/Settings';
import Account from '../components/pages/Account';
import ProfileSettings from '../components/pages/ProfileSettings';
import SecurityPrivacy from '../components/pages/SecurityPrivacy';
import Password from '../components/pages/Password';
import Notification from '../components/pages/Notification';
import Help from '../components/pages/Help';
import FAQs from '../components/pages/FAQs';
import SubmitTicket from '../components/pages/SubmitTicket';
import NetworkStatus from '../components/pages/NetworkStatus';
import Logout from '../components/pages/Logout';

export function createMenuTree() {
    const tree = new NaryTree();

    const root = new TreeNode('Menu Principal', '/');

    const profile = new TreeNode('Profile', '/profile', Profile);
    root.addChild(profile);

    const messages = new TreeNode('Messages', '/messages', Messages);
    root.addChild(messages);

    const settings = new TreeNode('Settings', '/settings', Settings);

    const account = new TreeNode('Account', '/settings/account', Account);
    const profileSettings = new TreeNode('Profile', '/settings/profile', ProfileSettings);
    const securityPrivacy = new TreeNode('Security & Privacy', '/settings/security', SecurityPrivacy);
    const password = new TreeNode('Password', '/settings/password', Password);
    const notification = new TreeNode('Notification', '/settings/notification', Notification);

    settings.addChild(account);
    settings.addChild(profileSettings);
    settings.addChild(securityPrivacy);
    settings.addChild(password);
    settings.addChild(notification);

    root.addChild(settings);

    const help = new TreeNode('Help', '/help', Help);

    const faqs = new TreeNode('FAQs', '/help/faqs', FAQs);
    const submitTicket = new TreeNode('Submit a Ticket', '/help/ticket', SubmitTicket);

    help.addChild(faqs);
    help.addChild(submitTicket);

    root.addChild(help);

    const networkStatus = new TreeNode('Network Status', '/network', NetworkStatus);
    root.addChild(networkStatus);

    const logout = new TreeNode('Logout', '/logout', Logout);
    root.addChild(logout);

    tree.setRoot(root);

    console.log('=== Estructura del Menú (Árbol N-ario) ===');
    tree.preorder();

    return tree;
}